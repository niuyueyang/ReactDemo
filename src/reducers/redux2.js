let initAll={
	title:'测试标题123',
	list:['test1']
}
let redux2=(state=initAll,action)=>{
	switch(action.type){
		case 'TestAdd':
			state.list=[...state.list,action.value];
			//return state;//redux
			return Object.assign({},state)
			
		break;
		case 'TestDel':
			state.list.splice(action.key,1);
			//return state;//redux
			return Object.assign({},state)
		break;
		default:
			return state;
		break;
	}
}
export default redux2;