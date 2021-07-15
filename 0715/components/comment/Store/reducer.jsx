

// reducer는 결국 상태를 바꿔야 하기떄문에 
// 이전 상태값을 가져와야함.
// dispatch 바꿀정보를 받아야함 -> action
// 결국 앤 리턴을해주는데 무엇을 리턴하냐 state값 
const reducer = (state,action) => {
    switch(action.type){
        case "GET_COMMENT": //최초실행했을 때
           return{
               ...state,
               loadding:true,
           }
        
        case "GET_COMMENT_SUCCESS":
            return{
                ...state,
                loadding:false, 
               commentItem:action.payload
            }

        case "GET_COMMENT_ERROR":
            return{
                ...state,
                loadding:false, 
                error:action.payload
            }
        case "CREATE":
            return {
                ...state,
                commentItem:[...state.commentItem,action.payload]
            }
        case "UPDATE":
            let content = action.payload.content;
            let index = action.payload.index;
            let {commentItem} = {...state}; 
            commentItem[index].content = content; 
            return {
                ...state,
                commentItem:[...commentItem]
            }
        case "DELETE":
            let newArr = [...state.commentItem].filter((_,i)=> 
                i !== action.payload
            );
            return {
                ...state,
                commentItem:newArr,
            }
            
        default:
            return state
    }
}

export default reducer 