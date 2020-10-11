import { createStore, applyMiddleware } from "redux";
import thunk from "react-thunk";
import reducer from "./reducers/Reducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
