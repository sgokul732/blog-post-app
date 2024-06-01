import { DeleteState } from "../deleteBlog/types"

export interface BlogType{
    id:string,
    title:string,
    categories:string,
    description:string,
    likes:number
}


export interface BlogActionType{
    type:string
    payload:BlogType
    sideBar:string
    editPayload:BlogType | null
}

export interface BlogState{
    blogs:BlogType[],
    sideBlog:string,
    editPayload:BlogType | null

}

export interface AppState {
    blogReducer:BlogState,
    deleteReducer:DeleteState
  }