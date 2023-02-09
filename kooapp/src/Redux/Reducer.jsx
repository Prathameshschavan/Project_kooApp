 const intitate = {
    product :[],
    get :false,
    post:false,
    delete:false
 }

 const Reducer =(state = intitate,action)=>{
    switch(action.type){
        case "Get":{
            return {
                ...state, product:action.payload
            }
        }
    }
    return state;

 }
 export default Reducer;