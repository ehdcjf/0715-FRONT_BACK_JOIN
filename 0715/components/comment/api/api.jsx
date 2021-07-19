/*

*/

const getComment = async(dispatch) =>{ 
  dispatch({type:'GET_COMMENT'})
  try{
    const response =await fetch('http://localhost:3001')
    const data = await response.json()
    dispatch({type:'GET_COMMENT_SUCCESS',payload:data})
  }catch(e) { 
    dispatch({type:'GET_COMMENT_ERROR',payload:e})
  }
}

const createComment = async(dispatch, payload) => { 

  const {userid,content} = payload; 
  let url = 'http://localhost:3001/'
  let options = {
  method: 'post',
  mode:'cors',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    userid,
    content
  }),
}
let response = await fetch(url,options); 
let data = await response.json(); 
dispatch({ type:'CREATE' ,payload:data })
}

const deleteComment = async(dispatch,payload)=>{ 
  const {index,location} = payload; 
  let url = 'http://localhost:3001/'
  let options = {
  method: 'delete',
  mode:'cors',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    index
  }),
}
let response = await fetch(url,options); 

  dispatch({type:'DELETE', payload:location})
}

const updateComment = async(dispatch,payload) =>{ 
  const {index,location,content} = payload; 
  let url = 'http://localhost:3001/'
  let options = {
  method: 'put',
  // mode:'no-cors',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    index,content
  }),
}

let response = await fetch(url,options); 


dispatch({ 
  type:'UPDATE',
  payload:{ 
      location,
      content,
  }
})
}





module.exports = { 
  getComment,
  createComment,
  deleteComment,
  updateComment

}