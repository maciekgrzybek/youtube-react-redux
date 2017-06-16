export default (videos) => {
	return {
		type: 'YT_SEARCH',
		payload: videos
	}
}