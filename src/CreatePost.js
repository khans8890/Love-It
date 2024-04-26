import './CreatePost.css'
import { useContext, useState } from 'react';
import AppContext from './Context/index.js';

function CreatePost(){
    // const [flag, setFlag] = useState(false);
    const { createPostItFlag, setCreatePostItFlag } = useContext(AppContext);

        // useEffect(()=> {
        //     // console.log(context, 'hi')})
        const handleClick = (e) =>{
            e.preventDefault();
            setCreatePostItFlag(true);
            // console.log(createPostItFlag, e.type)

        };

    return (
        <>
        <button id="post-button" onClick={handleClick}>Create a Post It</button>
        {/* {setFlag && } */}
        </>
    )
};

export default CreatePost;