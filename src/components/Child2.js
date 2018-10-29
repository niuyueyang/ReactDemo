import React,{Component} from 'react';
import emitter from "../event/event";
class Child2 extends Component{
	constructor(props){
		super(props);
	}
	handleClick(){
		emitter.emit('changeChild1','second')
	}
	render(){
		return(
			<div><button onClick={this.handleClick.bind(this)}>点击修改child1内容</button>}</div>
		)
	}
}
export default Child2;