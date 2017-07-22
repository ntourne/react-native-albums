import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
            return <Text>Loading...</Text>;
        /*
        return this.state.albums.map(album => 
            <Text key={album.title}>{album.title}</Text>
        );
        */
    }

    componentDidMount() {
        console.log('componentDidMount in AlbumList');
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}


export default AlbumList;