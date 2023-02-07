import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice, { incrementByValue } from "./counterSlice";
import globalSlice from "./globalSlice";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
//My custom middleware to logger store state
const loggerMiddleWare = (store) => (next) => (action) => {
  // your code here
  //   console.log(action);
  //   action.payload = 10;
  //   next(action);
};
// redux-logger
// const loggerMiddleware = function (store) {
//   return function (next) {
//     return function (action) {
//     };
//   };
// };

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

//store.subscribe(() => {
// javascript observer pattern
//console.log(`current state: ${store.getState().counter.count}`);
//});

//store.dispatch(incrementByValue(1));
//store.dispatch(incrementByValue(3));
//store.dispatch(incrementByValue(5));
//sagaMiddleware.run(rootSaga);
export default store;
