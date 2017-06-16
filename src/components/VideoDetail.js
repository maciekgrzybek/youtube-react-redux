import React from 'react'
import { connect } from 'react-redux'

const videoUrl = 'https://www.youtube.com/embed/';

const VideoDetail = (props) => {

	if(!props.activeVideo) {
		return (
			<div>Loading...</div>
		)
	}
	return (
		<div className="small-12 large-7 columns">
			<div className="card">
				<div className="responsive-embed widescreen">
					<iframe title="siemano" src={ videoUrl + props.activeVideo.id.videoId } frameborder="0" allowfullscreen></iframe>
				</div>
				<div className="card-section">
					<h2>{ props.activeVideo.snippet.title }</h2>
					<p>{ props.activeVideo.snippet.description }</p>
				</div>

			</div>

		</div>
	)
}

function mapStateToProps(state) {
	return {
		activeVideo: state.activeVideo
	}
}

export default connect(mapStateToProps)(VideoDetail)