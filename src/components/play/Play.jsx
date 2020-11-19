import React, { useRef, useState, useEffect, useMemo } from 'react';
import * as tf from '@tensorflow/tfjs';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Play.css';
import { feedbackElements } from '../../utils/styleContainers';
import Countdown from 'react-countdown';
import { makeAnswers } from '../../utils/setPlay';
import { useSocket } from '../../provider/socketProvider';
import { 
  setCorrectAnswers, 
  setTotalAnswers 
} from '../../actions/studentActions';
import { Score } from './Score';
import { loseMedia, winMedia } from './resultsMedia';

export const Play = () => {
  const net = useSelector(state => state.net);
  const classifier = useSelector(state => state.classifier);
  const [question, setQuestion] = useState({});
  const [questionAssets, setQuestionAssets] = useState({ 
    answerElements: ['', '', '', ''] 
  });
  const [feedback, setFeedback] = useState();
  const [result, setResult] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);
  const [countdown, setCountdown] = useState();
  const [timer, setTimer] = useState(100);
  const [isComplete, setComplete] = useState(false);
  const dispatch = useDispatch();
  const now = useMemo(() => Date.now(), [question]);

  const video = useRef();
  const socket = useSocket();
  
  useEffect(async() => {
    const stream = await window.navigator.mediaDevices.getUserMedia({ video });
    video.current.srcObject = stream;
    
    socket.on('RECEIVE_QUESTION', (data) => {
      
      clearInterval(countdown);
      setDisplayResults(false);
      setQuestion(data);
      setQuestionAssets(makeAnswers(data));
      setTimer(data.timer ? data.timer : 15);
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

  const renderer = ({ seconds, completed }) => {
    if(completed) {
      
      // Render a completed state
      return <img src={displayResults} alt="results"/>;
    } else {
      // Render a countdown
      return <h2>Time Remaining: {seconds}</h2>;
    }
  };

  // evaluate game results here and update socket and state score
  if(isComplete) {
    console.log(questionAssets);
    clearInterval(countdown);
    
    dispatch(setTotalAnswers());
    if(feedback === questionAssets.correctAnswer) {
      dispatch(setCorrectAnswers());
      setResult(true); 
      setDisplayResults(winMedia);
    } else {
      setResult(false);
      setDisplayResults(loseMedia);
    }
    setComplete(false);
  } 

  return (
    <div className={styles.play}>
      <div className={styles.upperDisplay}>
        
        <Countdown 
          key={question.text}
          date={now + (timer * 1000)}
          renderer={renderer}
          onComplete={() => setComplete(true)}
        />
        <Score />
      </div>
      <h3>question: {question.text}</h3>
      <div className={styles.parent}>
        <section>
          {questionAssets.answerElements[1]}
          {questionAssets.answerElements[3]}
        </section>
        <div className={styles.centerPlay}>
          <div className={styles.gridparent}>
            {feedbackElements(styles, feedback)}
          </div>
          <video ref={video} autoPlay></video>
        </div>
        <section>
          {questionAssets.answerElements[0]}
          {questionAssets.answerElements[2]}
        </section>
      </div>
    </div>
  );
};
