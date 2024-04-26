import AppContext from './index.js';
import { useState } from "react";


const ContextProvider = ({children}) => {
    const [createPostItFlag, setCreatePostItFlag] = useState(false);
    const context = {
        createPostItFlag,
        setCreatePostItFlag,
    };

    return (
        <AppContext.Provider value = { context }>
            {children}
        </AppContext.Provider>
    )
};

export default ContextProvider;