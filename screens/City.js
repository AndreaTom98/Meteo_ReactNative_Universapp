import React from 'react';
import {View, Text, Button} from 'react-native';


const City = (props) => {
    const navigation = props.navigation;
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>hello from city</Text>
            <Button title={'torna indietro completamente'} onPress={() => navigation.popToTop()} />
            <Button title={'vai a city'} onPress={() => navigation.push('City')} />
        </View>
    )
}

export default City;