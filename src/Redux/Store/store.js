import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

//import react-router
import { connectRouter, routerMiddleware } from "connected-react-router";

//reducer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
    }),
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
  );
}
