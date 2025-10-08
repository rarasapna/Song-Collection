import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { ButtonComponent } from './ButtonComponent';

export const ShowSong = (props) => {
        const { name, value, isRating, rating } = props;
        return (
            <View style={styles.mainContainer}>
                <View style={styles.nameContainer}>
                    <Text>{name}</Text>
                </View>
                <Text style={styles.generalFontSize}>: </Text>
               <View style={styles.descriptionContainer}>
               {
                    isRating ?
                        rating === 5 ?
                            <Image
                                style={styles.ratingImage}
                                source={require('../../assets/images/five-stars.png')} // Ganti tulisan 'path'
                            />
                            :
                            rating === 4 ?
                                <Image
                                    style={styles.ratingImage}
                                    source={require('../../assets/images/four-stars.png')} // Ganti tulisan 'path'
                                />
                                :
                                rating === 3 ?
                                    <Image
                                        style={styles.ratingImage}
                                        source={require('../../assets/images/three-stars.png')} // Ganti tulisan 'path'
                                    />
                                    :
                                    rating === 2 ?
                                        <Image
                                            style={styles.ratingImage}
                                            source={require('../../assets/images/two-stars.png')} // Ganti tulisan 'path'
                                        />
                                        :
                                        <Image
                                            style={styles.ratingImage}
                                            source={require('../../assets/images/star.png')} // Ganti tulisan 'path'

                                        />
                        :
                        <Text style={styles.textValue}>{value}</Text>
                }
               </View>

            </View>
        )
    };

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 16
    },
    nameContainer: {
        flex: 1
    },
    descriptionContainer: {
        flex: 3
    },
    descriptionData: {
        textAlign : 'justify'
    },
    ratingImage: {
        width: 100, // Sesuaikan ukuran gambar rating
        height: 20,
        // marginVertical: 5
    },
});