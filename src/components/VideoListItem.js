import React from 'react'

const VideoListItem = (props) => {

	return (
		<li className="list-group-item" onClick={ () => props.handleClick(props.book) }>
			<div className="list-group-item__image">
				<img src={ props.book.snippet.thumbnails.default.url } alt={ props.book.snippet.title }/>
			</div>

			<p>{ props.book.snippet.title }</p>
		</li>
	)
}


export default VideoListItem