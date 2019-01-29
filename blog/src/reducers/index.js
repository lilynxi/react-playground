import { combineReducers } from 'redux';


export default combineReducers({
  initialState: () => "initial state from reducer"
});

// import { combineReducers } from 'redux';

// // export interface IGlobalState {
// //   initialState: () => string,
// // }

// export interface IGlobalState {
//   initialState: string,
// }

// export default combineReducers({
//   initialState: ():string => "initial state from reducer"
// });