import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import WeatherIcon from '../components/WeatherIcon';

const WeatherDay = props => {
    const dayOfWeek = ['domenica','lunedi', 'martedi', 'mercoledi', 'giovedi', 'venerdi', 'sabato',];
    // console.log(props.data);
    const indexDay = new Date(props.data.dt_txt).getDay();
    const day = dayOfWeek[indexDay];
    const temperature = Math.floor(props.data.main.temp - 273.15);
    const code = props.data.weather[0].icon
    return (
        <View style={styles.container}>
            <View style={{width: 100}}>
              <Text style={styles.day}>{day}</Text>
            </View>
            <WeatherIcon code={'09n'} />
            <View style={{width: 50}}>
                <Text style={styles.temperature}>{temperature}</Text>
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
        marginLeft: 5,
        fontSize: Dimensions.get('window').height > 600 ? 22 : 18,
    },
    temperature: {
        marginRight: 5,
        fontSize: Dimensions.get('window').height > 600 ? 22 : 18,
    }
})

export default WeatherDay;