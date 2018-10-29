import {connect} from 'react-redux'
import App from '../components/App'
import Action from '../action/index'

let mapStateToProps=(state)=>({
	action:state.action,//reducers/action.js
})

let mapDispatchToProps=(dispatch,ownsProp)=>({
	add:(value)=>dispatch({
		type:Action.ADD,
		value
	}),
	del:(key)=>dispatch({
		type:Action.DEL,
		key
	})
})

let Apps=connect(mapStateToProps,mapDispatchToProps)(App);

export default Apps;

