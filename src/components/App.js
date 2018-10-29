import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter,
} from "react-router-dom";
import PostList from "./PostList";
import PostTitle from "./PostTitle";
import Counters from './Counter'
import Child1 from './Child1'
import Router1 from './Router1'
import Router2 from './Router2'


import {Provider,connect} from 'react-redux'
//import Reduxs from './Reduxs'
import { createStore,bindActionCreators  } from 'redux';
import { combineReducers } from 'redux';


class App extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
    	<BrowserRouter>
      <div className="App">
        <Route exact path="/" component={PostList}/>
        <Route path="/title" component={PostTitle}/>
        <Route path="/counter" component={Counters}/>
        <Route path="/child1" component={Child1}/>
        <Route path="/router1" component={Router1}/>
        <Route path="/router2/:id" component={Router2}/>
      </div>
      </BrowserRouter>
    );
  }
}
/*import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import React, { Component } from 'react';
import Action from '../action/index'
import ReactRedux from './ReactRedux'
import Redux1 from './Redux1'
import Redux2 from './Redux2'
import { Button,Input,Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';
class App extends Component {
	constructor(props){
		super(props);
		this.myRef = React.createRef();
		this.state={
			list:[]
		}
	}*/
	//redux
	
/*	add=()=>{
//		let {list,title}=this.props.store.action;
		let {list,title}=this.props.action;//react-redux
		let {dispatch}=this.props;
		var inp=document.getElementById("inp");
		let newValue=inp.value;
		dispatch({type:Action.ADD,value:newValue})
		this.setState({
			list:[...list,newValue]
		})
	}
	del=(key)=>{
//		let {list,title}=this.props.store.action;
		let {list,title}=this.props.action;//react-redux
		let {dispatch}=this.props;
		let newList=list.splice(key,1);
		dispatch({type:Action.DEL,key:key})
		this.setState({
			list:newList
		})
	}*/
	
	//react-redux
/*	
	render(){
		let {add,del}=this.props;
		return(
			<div>
				<Input placeholder="Basic usage" ref={this.myRef} id="inp"/>
				<Button onClick={()=>{add(this.myRef.current.input.value)}}>添加</Button>
				<Row gutter={16}>
					{
							this.props.action.list.map((item,index)=>
								<Col span={8} key={index} onClick={()=>{del(index)}}>
							        <Card title="Redux 数据" bordered={false}>{item}</Card>
							     </Col>
							)
					}
			    </Row>
			</div>
		)
	}
}*/

export default App;
//export default connect(mapStateToProps,mapDispatchToProps)(App)
