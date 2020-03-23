import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const RoundButton = (props) => {
    const plusImage = require('../assets/plus.png');
    const isPlus = props.plusButton;
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image source={plusImage} style={styles.plusImage} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusImage: {
        width: 30,
        height: 30,
        tintColor: 'white'
    }
})

export default RoundButton;