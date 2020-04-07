import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import WeatherTime from "../components/WeatherTime";

const City = ({ route }) => {
  const { data } = route.params;
  console.log("from city.js:", data);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* frontContainer */}
      <View style={styles.frontContainer}>
        <Text style={styles.cityName}>Milano</Text>
        <Text style={styles.description}>soleggiato</Text>
        <Text style={styles.temperature}>21</Text>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollView}
        >
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
          <WeatherTime />
        </ScrollView>
      </View>

      <View style={styles.daysContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  frontContainer: {
    flex: 3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  scrollContainer: {
    width: "100%",
    flex: 1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    alignItems: "center"
  },
  scrollView: {
    width: '100%',
    alignItems: 'center',
    flex:1
  },
  daysContainer: {
    width: "100%",
    flex: 3
  },
  cityName: {
    fontSize: 45
  },
  description: {
    fontSize: 20
  },
  temperature: {
    fontSize: 70,
    marginTop: 10
  }
});

export default City;
