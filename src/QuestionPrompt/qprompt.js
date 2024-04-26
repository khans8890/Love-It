import './qprompt.css';
import { useState, useEffect } from 'react';
import CreatePost from '../CreatePost.js';

function QuestionPrompt(){
    const questions = ["How are you honoring the day of love today and for the rest of the year?","What's a way you are celebrating love?", "What does love sound like to you?" ];
    const [currQuestionIndex, setCurrrQuestionIndex] = useState(0);
    // const [showCursor, setShowCursor] = useState(false);

  //   useEffect(() => {
  //       // const timerId = setInterval(() => {
  //       //     setCurrrQuestionIndex(prevIndex =>
  //       //     (prevIndex + 1) % questions.length
  //       //   );
  //       // }, 5000);

  //       // return () => clearInterval(timerId);
  // }, []);


    return (
        <>
        <div className='q-container'>
              <div className='q'>
                <p>{questions[currQuestionIndex]}</p>
                </div>
                <CreatePost/>
        </div>
        </>
    )
}

export default QuestionPrompt;