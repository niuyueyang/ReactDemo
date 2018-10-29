import React,{Component} from 'react';
class PostItem extends Component{
	constructor(props){
		super(props);
		this.state={
			vote:0,
			styles:{
				color:'red',
				fontSize:'20px'
			}
		}
	}
	//处理点赞
	handleClick(){
		let vote=this.state.vote;
		vote++;
		this.setState({
			vote:vote
		}) 
//		this.state.vote++;
//		this.setState({
//			vote:this.state.vote
//		})
	}
	authorClick(i,v,e){
		var parent=e.target.parentNode;
		var next=e.target.nextSibling;
		var previous=e.target.previousSibling;
		console.log(i,v,parent,next,previous);
	}
	render(){
		const {title,author,date,index,item} = this.props;
		return(
			<li key={index}>
				<div style={this.state.styles}>{title}</div>
				<div onClick={(event)=>{
					this.authorClick(index,item,event);
				}}>{author}</div>
				<div>{date}</div>
				<div>
					<button onClick={()=>{
						this.handleClick();
					}}>点赞</button>
					&nbsp;
					<span>
						{this.state.vote}
					</span>
				</div>
			</li>
		)
	}
}
export default PostItem;