import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as KNN from '@tensorflow-models/knn-classifier';
import { useDispatch } from 'react-redux';
import { setClassifierState, setNetState } from '../../actions/studentActions';
import styles from './TfCalibrater.css';

export default function TfCalibrater() {

  const video = useRef();
  const [classifier, setClassifier] = useState();
  const [net, setNet] = useState();
  const [result, setResult] = useState();
  const [feedback, setFeedback] = useState();
  const [position, setPosition] = useState();
  const dispatch = useDispatch();
  
  useEffect(async() => {
    const classifier = KNN.create();
    setClassifier(classifier);
    const net = await mobilenet.load();
    setNet(net);
    const stream = await window.navigator.mediaDevices.getUserMedia({ video });
    video.current.srcObject = stream;

    setInterval(async() => {

      const image = tf.browser.fromPixels(video.current);
      const logits = net?.infer(image, 'conv_preds');
      const result = await classifier?.predictClass(logits);
      setFeedback(result?.label);
      logits?.dispose();
      image?.dispose();


    }, 500);


  }, [position]);

  const train = name => {
    const image = tf.browser.fromPixels(video.current);
    const logits = net.infer(image, 'conv_preds');
    classifier.addExample(logits, name);
    logits.dispose();
    image.dispose();

  };

  const handleCalibrate = ({ target }) => {
    const training = setInterval(() => {
      train(target.name);
      console.log('machine trained');
    }, 250);
    setTimeout(() => {
      clearInterval(training);
    }, 3000);
  };

  return (
    <>
      <button name="a" onClick={handleCalibrate}>a</button>
      <button name="b" onClick={handleCalibrate}>b</button>
      <button name="c" onClick={handleCalibrate}>c</button>
      <button name="d" onClick={handleCalibrate}>d</button>
      <h2>position: {position}</h2>
      <h2>feedback: {feedback}</h2>
      <div className={styles.parent}>
        <div className={styles.gridparent}>
          <div className = {`${styles.topleftbox}`}>A</div>
          <div className = {`${styles.toprightbox}`}>B</div>
          <div className = {`${styles.bottomleftbox}`}>C</div>
          <div className = {`${styles.bottomrightbox}`}>D</div>
          

        </div>
        <video ref={video} autoPlay></video>

        
      </div>

    </>



  );



}

