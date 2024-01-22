import Mainreducers from "./Redux/Reducer/Mainreducers";
import {createStore} from 'redux'
const Store= createStore(Mainreducers)
export default Store