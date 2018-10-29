import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';//针对redux的app.js
import App from './container/connectApp.js';//针对react-redux的app.js
import * as serviceWorker from './serviceWorker';
import { Button,Input,Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import {createStore,combineReducers} from 'redux';
import {Provider,connect} from 'react-redux'
import store from './store/store'

//针对counter.js react-redux
//初始化
/*var init={
	count:0,
	user:''
}
//reducer
function counter(state=init,action){
	switch(action.type){
		case 'increase':
			//保证return里面的count与init里面count字段相同
			return {count:action.countCounter,user:action.user}
		default:
			return state
	}
}
//store
const store=createStore(counter)
const update = () => {
//  const valueEl = document.getElementsByClassName('numValue');
    console.log(store.getState())
//  valueEl[0].innerHTML = store.getState().toString();
};

store.subscribe(update);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();*/





//针对app.js的redux
//let render=()=>{ReactDOM.render(<App store={store.getState()} dispatch={(action)=>store.dispatch(action)}/>, document.getElementById('root'))};
//render();
////对store数据监听
//store.subscribe(render)






//针对app.js的react-redux
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
, document.getElementById('root'))


