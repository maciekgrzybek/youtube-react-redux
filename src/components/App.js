import React, { Component } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'



class App extends Component {


	render() {
		return (
			<div className="App row">
				<SearchBar />
				<VideoDetail />
				<VideoList />
			</div>
		);
	}
}


export default App

