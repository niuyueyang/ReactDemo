import React,{Component} from 'react';
import PostItem from './PostItem';

import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const initialState = []

const productsReducer =(state,action)=>{
	if(typeof state=='undefined'){
		return 0;
	}
	switch (action.type){
		case 'INSERT':
			return state+1;
		case 'MINUS':
			return state-1;
		case 'CLEAR':
			return 0;
		default:
			return state;
	}
}
const cartReducer = function(stateArr=initialState, actionArr) {
  if(typeof stateArr=='undefined'){
		return [];
	}
	switch (actionArr.type){
		case 'INSERTARR':
			var newArr=stateArr.concat(actionArr.payLoad)
			return newArr;
		case 'MINUSARR':
			if(stateArr.length>0){
				store.getState().shoppingCart.pop();
				return stateArr.pop();
			}
		case 'CLEARARR':
			return [];
		default:
			return stateArr;
	}
}

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

let store = createStore(rootReducer);

const update = () => {
    const valueEl = document.getElementsByClassName('numValue');
    console.log(store.getState())
//  valueEl[0].innerHTML = store.getState().toString();
};

store.subscribe(update);

const data=[
	{title:"大家一起来讨论react吧",author:'张三',date:'2018-10-17 10:43'},
	{title:"前端框架，你最喜欢哪一个",author:'李四',date:'2018-10-18 10:43'},
	{title:"web App的时代已经到来",author:'王五',date:'2018-10-19 10:43'}
]
class PostList extends Component{
	constructor(props){
		super(props);
	}
	addNum=()=>{
		store.dispatch({type:"INSERT"})
	}
	minusNum=()=>{
		store.dispatch({type:"MINUS"})
	}
	clearNum=()=>{
		store.dispatch({type:"CLEAR"})
	}
	addArr=(newArr)=>{
		store.dispatch({type: "INSERTARR",payLoad:newArr})
	}

	minusArr=()=>{
		store.dispatch({type:"MINUSARR"})
	}
	clearArr=()=>{
		store.dispatch({type:"CLEARARR"})
	}
	render(){
		return(
			<div>
				帖子列表:
				<PostItem></PostItem>
				<ul>
					{
						data.map((item,index)=>
							<PostItem key={index} index={index} item={item} title={item.title} author={item.author} date={item.date}></PostItem>
						)
					}
				</ul>
				<div>
					Current Number: <span className="numValue">0</span>
				</div>
				<Button size="large" className="numBtn" onClick={this.addNum}>+</Button>
				<Button size="large" className="numBtn" onClick={this.minusNum}>-</Button>
				<Button size="large" className="numBtn" onClick={this.clearNum}>清除</Button>
				
				<Button size="large" className="numBtn" onClick={this.addArr.bind(this,[1,2,3])}>添加数组</Button>
                <Button size="large" className="numBtn" onClick={this.minusArr}>删减数组</Button>
                <Button size="large" className="numBtn" onClick={this.clearArr}>清除数组</Button>
                
			</div>
		)
	}
}
export default PostList;