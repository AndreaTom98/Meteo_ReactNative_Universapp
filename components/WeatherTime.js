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
        marginLeft: 20,
        borderWidth: 1,
    }
})

export default WeatherTime;