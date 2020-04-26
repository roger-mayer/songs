import React from "react";
import SongList from './SongList';
import { selectSong } from '../actions';
import reducers from '../reducers';

const App = () =>{
  return (
      <div>
        <SongList />
      </div>
  );
};

export default App;

//REDUCER (states in redux)
// Song list reducer
//Selected song reducer

//ACTION CREATOR
// Select Song