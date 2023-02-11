 const intitate = {
    product :[],
    get :false,
    post:false,
    delete:false,
    writer:false,
 }

 const Reducer =(state = intitate,action)=>{
    switch(action.type){
        case "Get":{
            return {
                ...state, product:action.payload
            }
        }

        case "OPEN_WRITER" :{
            return{
                ...state, writer:action.payload
            }
        }
    }
    return state;

 }
 export default Reducer;