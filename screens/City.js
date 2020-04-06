import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';


const City = ({route}) => {
    const {data} = route.params;
    console.log('from city.js:', data)
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {/* frontContainer */}
            <View style={styles.frontContainer}>
                <Text>Milano</Text>
                <Text>soleggiato</Text>
                <Text>21 gradi</Text>
            </View>
            <ScrollView horizontal={true} style={styles.scrollContainer}>
                <Text>dfrgthyjukiougbf</Text>
                <Text>dfrgthyjukiougbf</Text>
                <Text>dfrgthyjukiougbf</Text>
                <Text>dfrgthyjukiougbf</Text>
                <Text>dfrgthyjukiougbf</Text>
                <Text>dfrgthyjukiougbf</Text>
                <Text>dfrgthyjukiougbf</Text>
            </ScrollView>
            <View style={styles.daysContainer}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    frontContainer: {
        flex: 2,
        width: '100%',
        justifyContent: "center",
        alignItems: 'center'
    },
    scrollContainer: {
        width: '100%',
        flex:1
    },
    daysContainer: {
        width: '100%',
        flex: 2
    }
})

export default City;