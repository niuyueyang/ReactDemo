import React,{Component} from 'react';
class User extends Component{
	render(){
		return(
			<div>
				<span>{this.props.data}</span>
			</div>
		)
	}
}
export default User;