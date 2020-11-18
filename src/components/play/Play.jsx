import React, { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Play.css';
import { feedbackElements } from '../../utils/styleContainers';
import Timer from './Time';
import { question1 } from './testQuestion';
import { makeAnswers } from '../../utils/setPlay';

export const Play = () => {
  const net = useSelector(state => state.net);
  const classifier = useSelector(state => state.classifier);
  const [question, setQuestion] = useState(question1);
  const [questionAssets, setQuestionAssets] = useState({});
  const [feedback, setFeedback] = useState();
  const [result, setResult] = useState();
  const [countdown, setCountdown] = useState();
  const [timer, setTimer] = useState(5);
  const dispatch = useDispatch();

  const video = useRef();
  
  useEffect(async() => {
    const stream = await window.navigator.mediaDevices.getUserMedia({ video });
    video.current.srcObject = stream;
    // set incoming questions to question
    setQuestionAssets(makeAnswers(question));

    setCountdown(setInterval(async() => {
      const image = tf.browser.fromPixels(video.current);
      const logits = net.infer(image, 'conv_preds');
      const result = await classifier.predictClass(logits);
      setFeedback(result.label);
      logits.dispose();
      image.dispose();
    }, 500));

  }, []);

  // evaluate game results here and update socket and state score
  if(timer === 0) {
    clearInterval(countdown);
    console.log(questionAssets);
    console.log((feedback === questionAssets.correctAnswer) ? 'bingo' : 'wrong');
    console.log('evaluate gamne');
  }

  return (
    <div className={styles.play}>
      <Timer timer={timer} handleTimer={setTimer} />
      <h3>question: {question.text}</h3>
      {questionAssets.answerElements}
      {result}
      <div className={styles.parent}>
        <div className={styles.gridparent}>
          {feedbackElements(styles, feedback)}
        </div>
        <video ref={video} autoPlay></video>
      </div>
    </div>
  );
};
