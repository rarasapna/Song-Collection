import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { songData } from '../../data/SongData';
import { ShowSong } from '../component/songComponent';

const DetailScreen = (props) => {
    const { route } = props;
    const song = route.params.item;
    return (    
        <View style={styles.mainContainer}>
            <Image style={styles.imageDetail}
                source={{ uri: song.imageLink }}
            />

            <View style={styles.containerTitle}>
                
                <Text style={styles.title}>
                    {song.title}
                </Text>
            </View>

            <ShowSong
                name="Singer" // Nomor 1
                value={song.singer} // Nomor 1 
            />

            <ShowSong
                name="Year" // Nomor 1
                value={song.year} // Nomor 1 
            />
             <ShowSong
                name="Genre" // Nomor 1
                value={song.genre} // Nomor 1 
            />
             <ShowSong
                name="Songwriters" // Nomor 1
                value={song.songwriters} // Nomor 1 
            />
            <ShowSong 
             name="Rating" 
             isRating={true}  
             rating={song.rating}  
             />
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        margin: 16
    },
    imageDetail: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderLeftWidth: 10,
        borderColor: 'salmon'
    },
    containerTitle: {
        marginTop: 8,
        marginBottom: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
  
});

export default DetailScreen;