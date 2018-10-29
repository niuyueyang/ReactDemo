import {connect} from 'react-redux'
import ReactRedux from '../components/ReactRedux'
import Action from '../action/index'

let mapStateToProps=(state)=>({
	action:state.ReactRedux,//reducers/ReactRedux.js
})

let mapDispatchToProps=(dispatch,ownsProp)=>({
	addTest:(value)=>dispatch({
		type:Action.TestAdd,
		value
	}),
	delTest:(key)=>dispatch({
		type:Action.TestDel,
		key
	})
})

let connectReactRedux=connect(mapStateToProps,mapDispatchToProps)(ReactRedux);

export default connectReactRedux;
