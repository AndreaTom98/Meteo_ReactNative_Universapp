import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WeatherIcon from '../components/WeatherIcon';

const WeatherTime = props => {
    console.log('data from weather time component', props.data.weather[0].icon)
    const temperature = Math.floor(props.data.main.temp - 273.15);
    const time = new Date(props.data.dt_txt).getHours();
    const code = props.data.weather[0].icon
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 18}}>{time}</Text>
            <WeatherIcon code={code} />
            <Text style={{fontSize: 22}}>{temperature}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 22,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'grey'
    }
})

export default WeatherTime;