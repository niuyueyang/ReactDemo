import action from '../reducers/action'
import newTest from '../reducers/newTest'
import {createStore,combineReducers} from 'redux';
import {Provider,connect} from 'react-redux'

let reducers=combineReducers({
	action,
	newTest
})

//createStore为数据添加方法
let store=createStore(reducers);
export default store;