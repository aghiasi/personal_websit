export interface init {
    loading : boolean,
    data : Array<object>,
    error : string
}
export const initialState:init ={
    loading :false,
    data: [],
    error : ""
} 