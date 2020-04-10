import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import WeatherTime from "../components/WeatherTime";
import WeatherDay from '../components/WeatherDay';

const City = ({ route }) => {
  const { data } = route.params;
  console.log(data.list[0].main.temp)
  const temperature = Math.floor(data.list[0].main.temp - 273.15)
  const description = data.list[0].weather[0].description
  
  // Weather day data
  const WeatherDayData = data.list;
  const filteredDayData = WeatherDayData.filter(day => {
    return day.dt_txt.includes('18:00:00')
  })
  const WeatherDays = filteredDayData.map((item, index) => (
    <WeatherDay data={item} key={index} />
  ))
  // Weather time data
  const WeatherTimeData = data.list.slice(0, 9);
  const WeathersTimes = WeatherTimeData.map((item, index) => (
    <WeatherTime data={item} key={index} />
  ))
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* frontContainer */}
      <View style={styles.frontContainer}>
        <Text style={styles.cityName}>{data.city.name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.temperature}>{temperature}</Text>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={styles.scrollView}
        >
          {WeathersTimes}
        </ScrollView>
      </View>
      <View style={styles.daysContainer}>
        {WeatherDays}
      </View>
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
    alignItems: 'center',
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
