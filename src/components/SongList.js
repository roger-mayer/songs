import React, { Component } from "react";
import { connect } from 'react-redux';
import { selectSong} from "../actions";

//class-based component
class SongList extends Component {
    renderList(){
        return this.props.songs.map((song) =>{
           return (
             //list of elements
             <div className="item" key={song.title}>
                 <div className="right floated content">
                     <button
                         className="ui button primary"
                         onClick={() => this.props.selectSong(song)}
                     >
                         Select
                     </button>
                 </div>
                 <div className="content">{song.title}</div>
             </div>
           );
        });
    }
    render() {
        console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

//always pass state and return object
const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
};

//automatically runs dispatch function
export default connect(mapStateToProps,
    { selectSong }
    )(SongList);
