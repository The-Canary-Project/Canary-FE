/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as KNN from '@tensorflow-models/knn-classifier';
import { useDispatch } from 'react-redux';
import { setClassifierState, setNetState } from '../../actions/studentActions';
import styles from './TfCalibrater.css';

export default function TfCalibrater() {

  const video = useRef();
  const [classifier, setClassifier] = useState('null');
  const [net, setNet] = useState();
  const [feedback, setFeedback] = useState();
  const [isVisible, setVisibility] = useState(false);
  const [calibratedPositions, setCalibratedPositions] = useState([]);
  const dispatch = useDispatch();

  useEffect(async() => {
    const classifier = KNN.create();
    setClassifier(classifier);
    const net = await mobilenet.load();
    setNet(net);
    const stream = await window.navigator.mediaDevices.getUserMedia({ video });
    video.current.srcObject = stream;
    console.log(stream)
    setInterval(async() => {
      const image = tf.browser.fromPixels(video.current);
      const logits = net.infer(image, 'conv_preds');
      classifier.addExample(logits, 0)
      const result = await classifier.predictClass(logits);
      
      setFeedback(result.label);
      
      logits.dispose();
      image.dispose();
    }, 500);

    setTimeout(() => train('initial'), 10000);

  }, []);

  const train = name => {
    const image = tf.browser.fromPixels(video.current);
    const logits = net.infer(image, 'conv_preds');
    console.log(logits);
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
    } else {
      // make message more indicative of which calibrations are needed
      alert('calibration incomplete');
    }
  };

  return (
    <>
      <div className={styles.upperCalibration}>
        <img 
          src="https://thumbs.gfycat.com/CoarseActiveGibbon-small.gif" 
          alt="timer" 
          className={isVisible ? `${styles.visible}` : `${styles.notVisible}`} />
        <div className={styles.parent}>
          <div className={styles.gridparent}>
            <div className = {`${styles.topleftbox} ${feedback === 'a' && styles.feedback}`}>A</div>
            <div className = {`${styles.toprightbox} ${feedback === 'b' && styles.feedback}`}>B</div>
            <div className = {`${styles.bottomleftbox} ${feedback === 'c' && styles.feedback}`}>C</div>
            <div className = {`${styles.bottomrightbox} ${feedback === 'd' && styles.feedback}`}>D</div>
          </div>
          <video ref={video} autoPlay></video>
        </div>
      </div>
      <div className={styles.instructions}>
      <p>Calibrate your camera. Press the calibrate button and place your hand in the corresponding quadrant on the video until the timer runs out. For best results, move your hand around the quadrant during the timed period</p>
      </div>
      <div className={styles.buttonParent}>
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
