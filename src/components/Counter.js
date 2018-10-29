import React,{Component} from 'react';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux'
import PropTypes from 'prop-types';
class Counter extends Component{
	constructor(props){
		super(props);
		this.state={
			counts:0
		}
	}
	handleSwitchUser (user,counts) {
	    if (this.props.onIncreaseClick) {
	    	var newCounts=this.state.counts;
	    	newCounts++;
	    	this.setState({
	    		counts:newCounts
	    	})
	      	this.props.onIncreaseClick(user,newCounts)
	    }
	 }
	render(){
		const {value,onIncreaseClick}=this.props;
		return(
			<div>
				<span>{value}</span>
				<button onClick={this.handleSwitchUser.bind(this,'admin')}>增加</button>
			</div>
		)
	}
}
Counter.propTypes={
	value:PropTypes.number.isRequired,
	onIncreaseClick:PropTypes.func.isRequired
}
//Action
//const increaseAction={type:'increase'}
//reducer

//map redux state to component props
function mapStateToProps(state){
	return{
		value:state.count
	}
}
//map redux actions to component props
function mapDispatchProps(dispatch){
	return{
		onIncreaseClick: (users,counts) => {
	      dispatch({ type: 'increase',countCounter:counts,user:users })
	    }
//		onIncreaseClick:(users)=>dispatch({type:'increase',countCounter:counts++,user:users})
	}
}
const Counters=connect(
	mapStateToProps,
	mapDispatchProps
)(Counter);
export default Counters;
//export default Counter;
