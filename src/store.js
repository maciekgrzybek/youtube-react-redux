import { createStore, combineReducers } from 'redux'
import  VideosReducer  from './reducers/reducer_videos'
import  ActiveVideoReducer  from './reducers/reducer_active_video'

const rootReducer = combineReducers({
	books: VideosReducer,
	activeVideo: ActiveVideoReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store