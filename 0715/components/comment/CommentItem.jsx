import React,{useContext,useState} from 'react'
import Store from './Store/context'

const CommentItem = ({userid,content,date,index}) => {
    const {state,dispatch} = useContext(Store)
    const [input,setInput] = useState('')

    const handleDelete = () => { 
        dispatch({type:'DELETE', payload:index})
        setInput('')
    }

    const handleClick = () => { 
        setInput(content)
    }

    const handleChange = e => { 
        setInput(e.target.value); 
    }

    const handleKeyDown = e => { 
        
        if(e.key === 'Enter' && input!==''){ 
            dispatch({ 
                type:'UPDATE',
                payload:{ 
                    index,
                    content:input
                }
            })
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