import React,{useContext,useState} from 'react'
import Store from './Store/context'
import {updateComment,deleteComment} from './api/api'


const CommentItem = ({userid,content,date,index,location}) => {
    
    const {state,dispatch} = useContext(Store)
    const [input,setInput] = useState('')

    const handleDelete = () => { 
        const payload = {
            index,
            location,
        }
        deleteComment(dispatch,payload); 
        setInput('')
    }

    const handleClick = () => { 
        setInput(content)
    }

    const handleChange = e => { 
        setInput(e.target.value); 
    }

    const handleKeyDown = e => {
        const payload = { 
            index,
            location,
            content:input
        } 
        
        if(e.key === 'Enter' && input!==''){ 
            updateComment(dispatch,payload); 
            setInput('')
        }
    }

    return (
        <>
            <ul className="comment-row">
                <li className="comment-id">{userid}</li>
                <li className="comment-content">
                    <span onClick={handleClick}>
                        {   
                            input 
                            ? <input
                                type = 'text'
                                value = {input}
                                className ='comment-update-input'
                                onChange = {handleChange}
                                onKeyDown = {handleKeyDown}
                            />  
                            : content}
                    </span>
                    <span className='comment-delete-btn' onClick={handleDelete}>
                        X
                    </span>
                </li>
                <li className="comment-date">{date}</li>
            </ul>
        </>
    )
}

export default CommentItem