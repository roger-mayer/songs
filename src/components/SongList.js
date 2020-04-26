import React, { Component } from "react";
import { connect } from 'react-redux';

//class-based component
class SongList extends Component {
    render() {
        return <div>SongList</div>
    }
}

export default connect()(SongList);
