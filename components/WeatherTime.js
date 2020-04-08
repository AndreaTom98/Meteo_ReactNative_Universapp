import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WeatherIcon from '../components/WeatherIcon';

const WeatherTime = props => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 18}}>12</Text>
            <WeatherIcon code={'01n'} />
            <Text style={{fontSize: 22}}>20</Text>
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