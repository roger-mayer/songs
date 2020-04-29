//Reducers

import { combineReducers} from "redux";

//Static list of songs reducer
const songReducer = () => {
  return [
      {title: 'No Scrubs', duration: '4:05'},
      {title: 'All Star', duration: '3:05'},
      {title: 'I Want it That Way', duration: '2:45'},
      {title: 'Macarena', duration: '2:30'}
  ];
};

//receives info from action index.js
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
      return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
   songs: songReducer,
   selectedSong: selectedSongReducer
});
