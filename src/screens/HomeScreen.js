import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet }
    from 'react-native';
import { songData } from '../../data/SongData';

const HomeScreen = (props) => {
    const { navigation } = props;
    const [recommended, setRecommended] = useState([]);
    // const [allDetail, setAllDetail] = useState([]);
    
    const compareRating = (a, b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;

        if (ratingA > ratingB) {
            return -1;
        } else if (ratingA < ratingB) {
            return 1;
        } else {
            return 0;
        }
    };

    useEffect(() => {
        const sortedRecommended = [...songData].sort(compareRating);
        setRecommended(sortedRecommended);

    }, []);
    return (
        <View>
            <FlatList
                contentContainerStyle={styles.flatListContainer}
                data={recommended}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                     
                     <View style={styles.dataContainer}>
                            <Image
                                style={styles.songImage}
                                source={{ uri: item.imageLink }}
                            />

                            <View style={styles.songContainerList}>
                                <Text style={styles.title}>{item.title}</Text>
                                <View style={styles.containerSinger}>
                                    <Text>{item.singer}</Text>

                                </View>

                                {
                                    item.rating === 5 ?
                                        <Image
                                            style={styles.rating} // Nomor 1
                                            source={require('../../assets/images/five-stars.png')} // Nomor 2
                                        />
                                        :
                                        item.rating === 4 ?
                                            <Image
                                                style={styles.rating}
                                                source={require('../../assets/images/four-stars.png')}
                                            />
                                            :
                                            item.rating === 3 ?
                                                <Image
                                                    style={styles.rating}
                                                    source={require('../../assets/images/three-stars.png')}
                                                />
                                                :
                                                item.rating === 2 ?
                                                    <Image
                                                        style={styles.rating}
                                                        source={require('../../assets/images/two-stars.png')}
                                                    />
                                                    :
                                                    <Image
                                                        style={styles.rating}
                                                        source={require('../../assets/images/star.png')}
                                                    />

                                }
                                
                                <View style={styles.containerButton}>
                                <TouchableOpacity style={styles.tocebel} 
                                onPress={
                                    () => navigation.navigate('Detail', {item})
                                }>
                                    <Text style={styles.seeDetail}>See Details</Text>
                                </TouchableOpacity>
                            </View>

                            </View>

                        </View>
                    )
                }}
            />

        </View>
    )
};

const styles = StyleSheet.create({
    flatListContainer: {
        padding: 8
    },
    dataContainer: {
        margin: 8,
        borderColor: '#A6A6BD',
        borderWidth: 2,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    songContainerList: {
        marginLeft: 8,
        flex: 1
    },
    songImage: {
        width: 120,
        height: 120
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    containerSinger: {
        marginTop: 8,
        marginBottom: 8
    },
    rating: {
        marginTop: 8,
        marginBottom: 8,
        width: 100,
        height: 20
    },
    containerButton: {
        alignItems: 'baseline',
        marginTop: 8
    },
    tocebel: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#A6A6BD',
        backgroundColor: '#AFCAE8'

    },
    seeDetail: {
        color: 'white'
    }
});


export default HomeScreen;