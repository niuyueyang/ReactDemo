import React,{Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter,
  Link
} from "react-router-dom";
import { List, Avatar } from 'antd';
const data=[
	{id:1,name:'user1',description:'description1'},
	{id:2,name:'user2',description:'description2'},
	{id:3,name:'user3',description:'description3'},
	{id:4,name:'user4',description:'description4'},
	{id:5,name:'user5',description:'description5'}
]
class Router1 extends Component{
	constructor(props){
		super(props);
	}
	//通过link以及点击传参两种方式
	hrefs(id){
		this.props.history.push('/router2/'+id)　
	}
	render(){
		return(
			<div>
				<List
				    itemLayout="horizontal"
				    dataSource={data}
				    renderItem={item => (
				      <List.Item actions={[<div  onClick={this.hrefs.bind(this,item.id)}>跳转</div>]}>
				        <List.Item.Meta
				          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
				          title={ <NavLink to={'/router2/' + item.id}>{item.name}</NavLink> }
				          description={item.description}
				        />
				      </List.Item>
				    )}
				  />
			</div>
		)
	}
}
export default Router1;