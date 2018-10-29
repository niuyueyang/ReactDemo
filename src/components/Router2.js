import React,{Component} from 'react';
class Router2 extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		console.log(this.props.match.params.id)
	}
	getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) return unescape(r[2]); return null; 
	} 
	render(){
		return(
			<div><button>router2</button></div>
		)
	}
}
export default Router2;