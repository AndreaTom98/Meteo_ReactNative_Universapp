import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const WeatherCard = (props) => {
    const goToCity = () => {
        props.navigation.navigate('City', {
            title: props.title
        })
    }
    return (
        <TouchableOpacity onPress={goToCity} style={styles.card}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
       height: 60,
       width: '80%',
       backgroundColor: 'white',
       shadowColor: 'black',
       shadowRadius: 2,
       shadowOffset: {width: 0, height: 2},
       shadowOpacity: 0.3,
       marginBottom: 20,
       justifyContent: 'center',
       alignItems: 'center',
       elevation: 12,
       borderRadius: 8,
    },
    title: {
        color: 'black',
        fontSize: 22
    }
})

export default WeatherCard;