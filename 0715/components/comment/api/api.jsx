/*

*/

export const getComment = async(dispatch) =>{ 
  dispatch({type:'GET_COMMENT'})
  try{
    const response =await fetch('http://localhost:3000/api')
    const data = await response.json()
    dispatch({type:'GET_COMMENT_SUCCESS',payload:data})
  }catch(e) { 
    dispatch({type:'GET_COMMENT_ERROR',payload:e})
  }
}