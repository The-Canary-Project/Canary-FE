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


    }, 500)


  }, [position]);

  const train = (position) => {
    const image = tf.browser.fromPixels(video.current);
    const logits = net.infer(image, 'conv_preds');
    classifier.addExample(logits, position);
    logits.dispose();
    image.dispose();

  };

  const handleClick = () => {
    const array = ['a', 'b', 'c', 'd'];
    for(let i=0; i<array.length; i++) {
      console.log(array[i]);
      setPosition(array[i]);
      const calibrateInterval = setInterval(()=> {
            
        train(array[i])
      }, 500)
      setTimeout(()=> {
        clearInterval(calibrateInterval);
    
      }, 3000)

    }


  }

 return (
   <>
    <button name="calibrate" onClick = {handleClick}>Start Calibration</button>
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

