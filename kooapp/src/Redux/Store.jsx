
import { legacy_createStore as createStore,applyMiddleware} from "redux"
import  Reducer  from "./Reducer";

const   store =createStore(Reducer);
export default store;