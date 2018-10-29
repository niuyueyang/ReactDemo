import React,{Component} from 'react';
import Child2 from './Child2';
import emitter from "../event/event";//child1与child2子传父
class Child1 extends Component{
	constructor(props){
		super(props);
		this.state={
			data:'我是child1'
		}
		//emitter.on('changeChild1',this.change.bind(this))//可以为方法，此列并无措
		emitter.on('changeChild1',(msg)=>{
            this.setState({
				data:msg
			})
        })
	}
	change(msg){
		this.setState({
			data:'改变1'
		})
	}
	render(){
		return(
			<div>
				{this.state.data}
				<Child2></Child2>
			</div>
			
		)
	}
}
export default Child1;