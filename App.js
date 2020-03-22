import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./components/Header";
import WeatherCard from './components/WeatherCard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Meteo App"} />
        <ScrollView contentContainerStyle={styles.cardContainer}>
          <WeatherCard title={'Roma'} />
          <WeatherCard title={'Roma'} />
          <WeatherCard title={'Roma'} />
          <WeatherCard title={'Roma'} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20
  }
});
