import { createStore } from 'redux';

export default createStore((state, action) => { //createStore의 인자는 reducer 함수 
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())