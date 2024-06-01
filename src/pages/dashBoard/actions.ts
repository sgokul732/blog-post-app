import {BlogType} from './types'
import * as actionCreators from './actionCreator'
export const addBlog = (payload:BlogType) => {
    return {
      type: actionCreators.addBlog,
      payload
    }
}

export const editBlog = (payload:BlogType) => {
    return {
      type: actionCreators.editBlog,
      payload,
      
    }
}
export const deleteBlog = (payload:BlogType) => {
    return {
      type: actionCreators.deleteBlog,
      payload
    }
}
export const likeBlog = (payload:BlogType) => {
  return {
    type: actionCreators.likeBlog,
    payload
  }
}

export const sideBlog = (sideBar:string,editPayload:BlogType | null) => {
  return {
    type: actionCreators.sideBlog,
    sideBar,
    editPayload
  }
}