import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WeatherIcon from '../components/WeatherIcon';

const WeatherTime = props => {
    const temperature = Math.floor(props.data.main.temp - 273.15);
    const time = new Date(props.data.dt_txt).getHours();
    const code = props.data.weather[0].icon
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 18}}>{time}</Text>
            <WeatherIcon code={code} />
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 22}}>{temperature}</Text>
              <Text>o</Text>
            </View>
            
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