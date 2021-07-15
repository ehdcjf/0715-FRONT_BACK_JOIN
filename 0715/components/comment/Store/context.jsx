import {createContext} from 'react'

const initalState = {
    loadding:false,
    error:null,
    commentItem:[],
}
const Store = 
createContext(initalState);

export default Store