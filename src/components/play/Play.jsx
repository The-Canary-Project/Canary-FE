import React, { useRef, useState, useEffect, useMemo } from 'react';
import * as tf from '@tensorflow/tfjs';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Play.css';
import { feedbackElements } from '../../utils/styleContainers';
import Countdown from 'react-countdown';
import { makeAnswers } from '../../utils/setPlay';
import { useSocket } from '../../provider/socketProvider';

export const Play = () => {
  const net = useSelector(state => state.net);
  const classifier = useSelector(state => state.classifier);
  const [question, setQuestion] = useState({});
  const [questionAssets, setQuestionAssets] = useState({});
  const [feedback, setFeedback] = useState();
  const [result, setResult] = useState();
  const [countdown, setCountdown] = useState();
  const [timer, setTimer] = useState(30);
  const [isComplete, setComplete] = useState(false);
  const dispatch = useDispatch();
  const now = useMemo(() => Date.now(), [question]);

  const video = useRef();
  const socket = useSocket();
  
  useEffect(async() => {
    const stream = await window.navigator.mediaDevices.getUserMedia({ video });
    video.current.srcObject = stream;
    
    socket.on('RECEIVE_QUESTION', (data) => {
      console.log('RECEIVE QUESTION', data);
      //setQuestionArray(state => [...state, data])
      setComplete(false);
      setQuestion(data);
      setQuestionAssets(makeAnswers(data));
      // eslint-disable-next-line max-len
      setTimer(data.timer ? data.timer : 30);
      setCountdown(setInterval(async() => {
        const image = tf.browser.fromPixels(video.current);
        const logits = net.infer(image, 'conv_preds');
        const result = await classifier.predictClass(logits);
        setFeedback(result.label);
        logits.dispose();
        image.dispose();
      }, 500));
      return () => {socket.off('RECEIVE_QUESTION');};
    });


  }, []);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if(completed) {
      
      // Render a completed state
      return <h1>Youre Done</h1>;
    } else {
      // Render a countdown
      return <span>Time Remaining: {seconds}</span>;
    }
  };

  // if(!questionArray.length && isComplete) {
  //initiate question
  // }

  // evaluate game results here and update socket and state score
  if(isComplete) {
    clearInterval(countdown);
    console.log(questionAssets);
    // update user score here
    (feedback === questionAssets.correctAnswer) ? 'bingo' : 'wrong';
    console.log('evaluate game');
  }

  return (
    <div className={styles.play}>
      <Countdown 
        key={question.text}
        date={now + (timer * 1000)}
        renderer={renderer}
        onComplete={() => setComplete(true)}
      />
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
