import React from 'react';
import {Image} from 'react-native';

const WeatherIcon = props => {
    const url = `http://openweathermap.org/img/wn/${props.code}@2x.png`
    return <Image source={{uri: url}} style={{width: 50, height: 50}} />
}

export default WeatherIcon;