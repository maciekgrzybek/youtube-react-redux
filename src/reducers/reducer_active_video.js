export default (state = null, action) => {

	switch(action.type){
		case 'SELECT_VIDEO':
			return action.payload;
		default:
	}

	return state;
}