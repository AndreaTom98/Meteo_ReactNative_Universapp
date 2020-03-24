import React from 'react';
import {View, Text, Button} from 'react-native';


const City = (props) => {
    const navigation = props.navigation;
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>hello from city</Text>
            <Button title={'torna indietro'} onPress={() => navigation.goBack()} />
        </View>
    )
}

export default City;