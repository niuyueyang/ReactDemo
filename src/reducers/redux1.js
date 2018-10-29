let initAll={
	title:'测试标题',
	list:[]
}
let redux1=(state=initAll,action)=>{
	switch(action.type){
		case 'ADD':
			state.list=[...state.list,action.value];
			//return state;//redux
			return Object.assign({},state)
			
		break;
		case 'DEL':
			state.list.splice(action.key,1);
			//return state;//redux
			return Object.assign({},state)
		break;
		default:
			return state;
		break;
	}
}
export default redux1;