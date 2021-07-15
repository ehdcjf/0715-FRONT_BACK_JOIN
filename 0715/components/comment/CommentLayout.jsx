import React,{useContext,useEffect,useReducer} from 'react'

import Store from './Store/context'
import reducer from './Store/reducer'
import {getComment} from './api/api'

const CommentLayout = ({children}) => {

    const globalStore = useContext(Store)

    const [state,dispatch] = useReducer(reducer,globalStore)
    ////////////////서버/////////////////////////

    useEffect(async () => {
        // const reponse = await fetch('http://localhost:3000/api');
        // const data = await reponse.json();
        // console.log(data);
        // dispatch({type:'INIT', payload:data})
        getComment(dispatch)
    },[])
    ////////////////////////////////////////////
    return (
        <Store.Provider value={{state,dispatch}}>
            <ul className="comment">
                {children}
            </ul>
        </Store.Provider>
    );
}

//ReactDOM
export default CommentLayout