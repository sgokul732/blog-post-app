import * as actionCreator from './actionCreator'
import {BlogActionType,BlogState} from './types'
import { v4 as uuidv4 } from 'uuid';
const initialState:BlogState = { blogs:[],
sideBlog:'',editPayload:null}

export function blogReducer(state = initialState, action:BlogActionType) {
    const id=uuidv4()
  switch(action.type){
    case actionCreator.addBlog:
        action.payload.id=id
        return {
            ...state,
            blogs:[...state.blogs,action.payload]
        }
        case actionCreator.editBlog:{
            const data=[...state.blogs]
            const index=data.findIndex(ele=>ele.id.localeCompare(action.payload.id)===0) 
            data[index]={...action.payload}
            return {...state,blogs:data}       
        }     
        case actionCreator.deleteBlog: {
            const data={...state,blogs:[...state.blogs]}
       
            const index=data.blogs.findIndex(ele=>ele.id===action.payload.id)
            data.blogs.splice(index,1)
            return data
        }
        case actionCreator.likeBlog:{
            const index=state.blogs.findIndex(ele=>ele.id===action.payload.id) 
            state.blogs[index].likes++
            return {...state,blogs:[...state.blogs]}       
        } 
        case actionCreator.sideBlog:{
            return {...state,sideBlog:action.sideBar,editPayload:action.editPayload}       
        } 
        default:{
            return state
        }          
  } 
}