import React, { Component } from 'react';
import { Button,Input,Card, Col, Row } from 'antd';
import {connect} from 'react-redux'
import 'antd/dist/antd.css';
import Action from '../action/index'

let mapStateToProps=(state)=>({
	action:state.Redux1,//reducers/action.js
})

let mapDispatchToProps=(dispatch,ownsProp)=>({
	add:(value)=>dispatch({
		type:Action.ADD,
		value
	}),
	del:(key)=>dispatch({
		type:Action.DEL,
		key
	})
})

class Redux1 extends Component {
	constructor(props){
		super(props);
		this.myRef = React.createRef();
		this.state={
			list:[]
		}
	}	
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
}

let Redux11=connect(mapStateToProps,mapDispatchToProps)(Redux1);

export default Redux11;