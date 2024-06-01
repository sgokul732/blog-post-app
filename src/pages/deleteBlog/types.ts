import { BlogType } from "../dashBoard/types"


export interface DeleteState{
    shouldDelete:boolean
}
export interface DeleteActionType{
    type:string
    
}

export interface Iprops{
    data:BlogType
}