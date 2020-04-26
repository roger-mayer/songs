import React, { Component } from "react";
import { connect } from 'react-redux';

//class-based component
class SongList extends Component {
    render() {
        console.log(this.props);
        return <div>SongList</div>
    }
}

//always pass state and return object
const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
};

export default connect(mapStateToProps)(SongList);
