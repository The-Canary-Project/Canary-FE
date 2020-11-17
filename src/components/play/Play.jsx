import React, { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Play.css';
import { feedbackElements } from '../../utils/styleContainers';
import Timer from './Time';

export const Play = () => {
  const net = useSelector(state => state.net);
  const classifier = useSelector(state => state.classifier);
  const [feedback, setFeedback] = useState();
  const [timer, setTimer] = useState(5);
  const dispatch = useDispatch();

  const video = useRef();
  
  useEffect(async() => {
    const stream = await window.navigator.mediaDevices.getUserMedia({ video });
    video.current.srcObject = stream;

    // setInterval(async() => {
    //   const image = tf.browser.fromPixels(video.current);
    //   const logits = net.infer(image, 'conv_preds');
    //   const result = await classifier.predictClass(logits);
    //   setFeedback(result.label);
    //   logits.dispose();
    //   image.dispose();
    // }, 500);

  }, []);

  // evaluate game results here and update socket and state score
  if(timer === 0) {
    console.log('evaluate gamne');
  }

  return (
    <div className={styles.play}>
      <Timer timer={timer} handleTimer={setTimer} />
      <div className={styles.parent}>
        <div className={styles.gridparent}>
          {feedbackElements(styles, feedback)}
        </div>
        <video ref={video} autoPlay></video>
      </div>
    </div>
  );
};
