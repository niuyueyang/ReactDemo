import React, { Component } from 'react';
import { Button,Input,Card, Col, Row } from 'antd';
import {connect} from 'react-redux'
import Action from '../action/index'
import 'antd/dist/antd.css';

let mapStateToProps=(state)=>({
	action:state.Redux2,//reducers/ReactRedux.js
})

let mapDispatchToProps=(dispatch,ownsProp)=>({
	addTest:(value)=>dispatch({
		type:Action.TestAdd,
		value
	}),
	delTest:(key)=>dispatch({
		type:Action.TestDel,
		key
	})
})

class Redux2 extends Component {
	constructor(props){
		super(props);
		this.myRef = React.createRef();
		this.state={
			list:[]
		}
	}
	render(){
		let {addTest,delTest}=this.props;
		console.log(this.props)
		return(
			<div>
				<Input placeholder="test" ref={this.myRef} id="inp"/>
				<Button onClick={()=>{addTest(this.myRef.current.input.value)}}>添加</Button>
				<Row gutter={16}>
					{
							this.props.action.list.map((item,index)=>
								<Col span={8} key={index} onClick={()=>{delTest(index)}}>
							        <Card title="Redux 数据" bordered={false}>{item}</Card>
							     </Col>
							)
					}
			    </Row>
			</div>
		)
	}
}

let Redux22=connect(mapStateToProps,mapDispatchToProps)(Redux2);

export default Redux22;