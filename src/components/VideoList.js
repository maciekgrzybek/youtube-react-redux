import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import VideoListItem from './VideoListItem'
import selectVideo from '../actions/action_select_video'

const VideoList = (props) => {

	const renderVideoList =  props.books.map((book) => {
		return (
			<VideoListItem 
				key={ book.etag }
				book={ book }
				handleClick={ (book) => {props.selectVideo(book)} } />
		)
	});

		return (
			<div className="small-12 large-5 columns">
				<ul className="list-group">
					{ renderVideoList }
				</ul>
				<em></em>
			</div>
		)
}

function mapStateToProps(state) {
	return {
		books: state.books
	}
}

function mapDispatchToProps(dispatch) {
	return (
		bindActionCreators({ selectVideo: selectVideo}, dispatch)
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)