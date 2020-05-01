import React from "react";
import SongList from './SongList';
import SongDetail from "./SongDetail";
import {selectSong} from '../actions';
import reducers from '../reducers';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};

export default App;

//REDUCER (states in redux)
// Song list reducer
//Selected song reducer

//ACTION CREATOR
// Select Song
//next up calling action creators