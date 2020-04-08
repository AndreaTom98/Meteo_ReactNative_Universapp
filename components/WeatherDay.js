import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WeatherDay = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.day}>Giovedi</Text>
            <Text>icona</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.temperature}>23</Text>
                <Text style={styles.temperature}>16</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    day: {
        marginLeft: 5
    },
    temperature: {
        marginRight: 5
    }
})

export default WeatherDay;