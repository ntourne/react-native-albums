import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import Card from './Card';

class AlbumList extends Component {

    // Define initial state 
    state = {
        albums: []
    }

    componentWillMount() {

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {

        if (this.state.albums.length > 0)
            return this.state.albums.map(album => 
                <AlbumDetail key={album.title} album={album} />
            );
        else
            return <Text style={styles.loadingMsg}>Loading...</Text>;

    }

    componentDidMount() {
        console.log('componentDidMount in AlbumList');
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

const styles = {
    loadingMsg: {
        marginLeft: 10,
        marginTop: 15,
        fontSize: 16
    }
}

export default AlbumList;