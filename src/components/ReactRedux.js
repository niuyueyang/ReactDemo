import React, { Component } from 'react';
import Action from '../action/index'
import { Button,Input,Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

class ReactRedux extends Component{
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

export default ReactRedux;
