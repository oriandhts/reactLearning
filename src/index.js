import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { countAddAction } from './actions/counter'
import store from './store/store'
import { Provider } from 'react-redux'



// post请求
// const getPostRequest = () => {
//   return axios.get('https://jsonplaceholder.typicode.com/posts')
// }

// console.log(store)
// console.log(store.getState())


// store.dispatch(countAddAction)


// store.dispatch({
//   type: 'COUNT_REDUCE',
//   payload: {},
// })

// store.dispatch(async function (dispatch) {
//   const res = await getPostRequest()
//   console.log(res.data)
//   dispatch({
//     type: 'LOAD_POSTS',
//     payload: res.data
//   })
// })
// console.log(store)
// console.log(store.getState())



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
