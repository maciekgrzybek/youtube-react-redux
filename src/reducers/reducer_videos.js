export default (state = [], action) => {

	switch (action.type) {
		case 'YT_SEARCH':
			return action.payload;
		default:
	}

	return state;
}