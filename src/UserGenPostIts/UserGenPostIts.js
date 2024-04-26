import AppContext from '../Context';
import './UserGenPostIts.css';
import { useState, useEffect, useContext} from 'react';

const UserGenPostIts = () => {
    // // post it var
    // const [postIt, updatePostIt] = useState([]);
    // text var for each post it generated
    const [text, setText] = useState([]);
    // flag var
    const [userSubmission, setUserSubmission] = useState(false);
    const {createPostItFlag, setCreatePostItFlag} = useContext(AppContext);

    useEffect(() => {
        if(createPostItFlag) setUserSubmission(true)
        console.log(createPostItFlag, userSubmission )
    });

    // save text to state var text
    const handleChange = (e) => {
        setText([...text, e.target.value]);
    };
    
    // when user is done, text will appear on post it
    const handleSubmission = (e) => {
        e.preventDefault();
        console.log('handled submission function called')
        console.log(text)
    //     console.log(e.target.value, postIt)
    //     if(text !== ' ') updatePostIt([...postIt],text);
        setText('');
     };

    return (
      <>
      {userSubmission && 
        <div className='post-it-container'>
            <form onSubmit={handleSubmission}>
                    <input
                    className='post-it-input'
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder="write your submission"
                // add a key
                    />
                    <button type="submit" className='submit-button' onClick={handleSubmission}>Love-it</button>
                </form>    
                {/* <div>
                {updatePostIt.length > 0? updatePostIt.map((postIt, index) => (
                    <PostIt key={index} postit={postIt} />
                    )): null}
                 </div>     */}
        </div>
    }
     </>
    )
}

export default UserGenPostIts;


// when the user submits their submission to create their own post it --> needs to save the submission along with all past submissions --> render post its in a container all over the screen --> || yellow post it of user submission needs to dissapear too