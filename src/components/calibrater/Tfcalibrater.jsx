/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as KNN from '@tensorflow-models/knn-classifier';
import { useDispatch, useSelector } from 'react-redux';
import { setClassifierState, setNetState } from '../../actions/studentActions';
import { feedbackElements } from '../../utils/styleContainers';
import styles from './TfCalibrater.css';

export default function TfCalibrater() {

  const video = useRef();
  
  const knn = useSelector(state => state.classifier);
  const netState = useSelector(state => state.net);
  const [classifier, setClassifier] = useState();
  const [net, setNet] = useState();
  const [feedback, setFeedback] = useState();
  const [feedbackLoop, setFeedbackLoop] = useState();
  const [isVisible, setVisibility] = useState(false);
  const [calibratedPositions, setCalibratedPositions] = useState([]);
  const dispatch = useDispatch();

  useEffect(async() => {
    const classifier = !knn === {} ? knn : KNN.create();
    setClassifier(classifier);
    const net = !netState === {} ? netState : await mobilenet.load();
    setNet(net);
    const stream = await window.navigator.mediaDevices.getUserMedia({ video });
    video.current.srcObject = stream;

    setFeedbackLoop(setInterval(async() => {
      const image = tf.browser.fromPixels(video.current);
      const logits = net.infer(image, 'conv_preds');
      // classifier.addExample(logits, 0);
      const result = await classifier.predictClass(logits);
      setFeedback(result.label);
      logits.dispose();
      image.dispose();
    }, 500));

    setTimeout(() => train('initial'), 10000);
  }, []);

  const train = name => {
    const image = tf.browser.fromPixels(video.current);
    const logits = net.infer(image, 'conv_preds');
    classifier.addExample(logits, name);
    logits.dispose();
    image.dispose();
  };

  const handleCalibrate = ({ target }) => {
   setCalibratedPositions(state => ([...state, target.name]));
    setVisibility(true);
    const training = setInterval(() => {
      train(target.name);
      console.log('machine trained');
    }, 250);
    setTimeout(() => {
      clearInterval(training);
      setVisibility(false);
    }, 4500);
  };

  const handleAcceptFeedback = () => {
    if(calibratedPositions.length === 4) {
      dispatch(setNetState(net));
      dispatch(setClassifierState(classifier));
      alert('calibration model has been set');
      clearInterval(feedbackLoop);
    } else {
      // make message more indicative of which calibrations are needed
      alert('calibration incomplete');
    }
  };

  return (
    <>
      <div className={styles.upperCalibration}>
        <div className={styles.parent}>
          <div className={styles.gridparent}>
            <img 
            src="https://media.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif" 
            alt="timer" 
            className={isVisible ? `${styles.visible}` : `${styles.notVisible}`} />
            {feedbackElements(styles, feedback)}
          </div>
          <video ref={video} autoPlay></video>
        </div>
      </div>
    
      <div className={styles.buttonParent}>
        <p>Press the calibrate button and place your hand in the corresponding quadrant of the of the video. For best results, move your hand to different positions within the quadrant. A transparent green color will indicate that readings are being captured. After the timer finishes, repeat the process until you have calibrated all quadrants. Then press 'Accept Calibrate' to accept the calibration.</p>
        <div className={styles.calibrateButtons}>
          <button name="a" onClick={handleCalibrate}>Calibrate A</button>
          <button name="b" onClick={handleCalibrate}>Calibrate B</button>
          <button name="c" onClick={handleCalibrate}>Calibrate C</button>
          <button name="d" onClick={handleCalibrate}>Calibrate D</button>
        </div>
        {
          calibratedPositions.length === 4 && <button onClick={handleAcceptFeedback} >Accept Calibrate</button>
        }
      </div>
    </>
  );
}
