import './App.css';
import UserGenPostIts from './UserGenPostIts/UserGenPostIts.js';
import QuestionPrompt from './QuestionPrompt/qprompt';

function App({ postIt }) {
  return (
    <>
        <UserGenPostIts/>
        <QuestionPrompt/>
    </>
  );
}

export default App;
