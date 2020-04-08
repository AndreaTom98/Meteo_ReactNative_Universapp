import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WeatherTime = props => {
    return (
        <View style={styles.container}>
            <Text>12</Text>
            <Text>icona</Text>
            <Text>20</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 22,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
    }
})

export default WeatherTime;