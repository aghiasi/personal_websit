export interface init {
    loading : boolean,
    data : Array<Object>,
    error : string
}
export const initialState:init ={
    loading :false,
    data: [],
    error : ""
} 