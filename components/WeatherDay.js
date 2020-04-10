import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WeatherIcon from '../components/WeatherIcon';

const WeatherDay = props => {
    const dayOfWeek = ['domenica','lunedi', 'martedi', 'mercoledi', 'giovedi', 'venerdi', 'sabato',];
    // console.log(props.data);
    const indexDay = new Date(props.data.dt_txt).getDay();
    const day = dayOfWeek[indexDay];

    console.log(day);
    return (
        <View style={styles.container}>
            <Text style={styles.day}>{day}</Text>
            <WeatherIcon code={'09n'} />
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
        marginLeft: 5,
        fontSize: 20,
    },
    temperature: {
        marginRight: 5,
        fontSize: 22,
    }
})

export default WeatherDay;