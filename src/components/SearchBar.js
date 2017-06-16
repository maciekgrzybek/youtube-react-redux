import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import searchYT from '../actions/action_yt_search'
import selectVideo from '../actions/action_select_video'
import YouTube from 'youtube-node'
import _ from 'lodash'


var youTube = new YouTube();

const API_KEY = 'AIzaSyDa-gv-NmdwH0PDLRogxTXZUlxIL1Mfal8';

youTube.setKey(API_KEY);

class SearchBar extends Component {

	constructor(){
		super();
		this.search('react redux')
	}

	search(term) {
		youTube.search(term, 8, (error, result) => {
			if (error) {
				console.log(error);
			}
			else {
				this.props.searchYT(result.items)
				this.props.selectVideo(result.items[0])
			}
		});
	}

	render(){
		
		const searchDebounce = _.debounce((term) => {this.search(term)},300)
		return (
			<div className="small-12 large-8 columns">
				<h1>Redux/React powered simple video search</h1>
				<form>
					<input onChange={ (e) => searchDebounce(e.target.value) }  />
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return (
		bindActionCreators({ 
			searchYT: searchYT,
			selectVideo: selectVideo
		}, dispatch)
	);
}

export default connect(null,mapDispatchToProps)(SearchBar)