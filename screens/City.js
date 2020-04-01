import React from 'react';
import {View, Text, Button} from 'react-native';


const City = ({route}) => {
    const {title} = route.params
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>hello from {title}</Text>
        </View>
    )
}

export default City;