import React,{Component} from 'react';
import {
  Route,
  HashRouter,
  BrowserRouter,
  withRouter,
  NavLink
} from "react-router-dom";
class PostTitle extends Component{
	render(){
		return(
			<div>
				<NavLink to="/">PostList</NavLink>
			</div>
		)
	}
}
export default PostTitle;