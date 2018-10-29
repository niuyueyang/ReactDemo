import React,{Component} from 'react';
import './css/style.css'
class MyComponent extends Component{
	constructor(props){
		super(props);
		this.state={
			number:0,
			list:[1,2,3,4,5],
			current:1,
			options:['react','vue','angular'],
			value:'angular',
			checks:['今日话题','视觉焦点','财经','汽车','科技','房产','旅游'],
			arrsCheck:[],
			radios:[0,1],
			arrsRadio:'',
			num:0
		}
	}
	componentDidMount(){
		this.setState({
			value:'vue'
		})
	}
	handleClick(items,event){
		console.log(items,event.target)
		this.setState({
			current:items
		})
	}
	handleChange(event){
		this.setState({
			value:event.target.value
		})
		console.log(event.target.value)
	}
	removeArr(item,arr){
		var result=[];
		for(var i=0; i<arr.length; i++){
			if(arr[i]!=item){
				result.push(arr[i]);
			}
		}
		return result;
	}
	handleChangeCheck(item,event){
		var _self=this;
		if(event.target.checked){
			var arrs=this.state.arrsCheck;
			arrs.push(item);
			this.setState({
				arrsCheck:arrs
			})
		}else{
			var arrs=this.state.arrsCheck;
			var result=_self.removeArr(item,arrs);
			this.setState({
				arrsCheck:result
			})
		}
	}
	handleChangeRadio(item,event){
		this.setState({
				arrsRadio:item
			})
	}
	changeNum(){
		var num=this.state.num;
		num++;
		this.setState({
			num:num
		})
	}
	render(){
		return(
			<div>
				<ul>
					{this.state.list.map((item,index)=>(
						<li key={index} className={this.state.current==item?'current':''} onClick={this.handleClick.bind(this,item)}>{item}</li>
					))}
				</ul>
				<select value={this.state.value} onChange={this.handleChange.bind(this)}>
					{this.state.options.map((item,index)=>(
						<option value={item} key={index}>{item}</option>
					))}
				</select>
				<div>
				{this.state.checks.map((item,index)=>(
					<p key={index}><input type="checkbox" name="category" value={item} onChange={this.handleChangeCheck.bind(this,item)}/>{item} </p>     
				 ))}
				[   选中的值      ]:{this.state.arrsCheck.join('，')}
				{this.state.radios.map((item,index)=>(
					<p key={index}><input type="radio" name="gender" value={item} onChange={this.handleChangeRadio.bind(this,item)}/>{item==0?'男':'女'} </p>     
				 ))}
				[   选中的值      ]:{this.state.arrsRadio==0?'男':'女'}
				<button onClick={this.changeNum.bind(this)}>点我加1</button>
				{this.state.num}
				</div>
			</div>
		)
	}
}
export default MyComponent;