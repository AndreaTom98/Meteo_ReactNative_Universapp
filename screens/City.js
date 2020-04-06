import React from 'react';
import {View, Text, Button} from 'react-native';


const City = ({route}) => {
    const {data} = route.params;
    console.log('from city.js:', data)
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>hello from {data.city.name}</Text>
        </View>
    )
}

export default City;