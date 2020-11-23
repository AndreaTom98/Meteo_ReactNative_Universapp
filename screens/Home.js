import React, { useState, useCallback } from "react";
import axios from "axios";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import WeatherCard from "../components/WeatherCard";
import AddCityModal from "../components/AddCityModal";
import RoundButton from "../components/RoundButton";

const APIKEY = '[inserisci la tua API KEY]'

const App = props => {
  const [cities, setCities] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const addCity = useCallback(async (city) => {
    if (isFetching) return;
    setIsFetching(true)
    const data = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${APIKEY}&lang=it`
    );
    await setCities(cities.concat(data.data));
    await closeModal();
    setIsFetching(false)
  })


  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };
  
  
  let newCities = <Text>sto caricando</Text>;
  if (cities) {
    console.log(cities);
    newCities = cities.map((city, index) => (
      <WeatherCard navigation={props.navigation} key={index} data={city} />
    ));
  }

  return (
    <View style={styles.container}>
      <AddCityModal
        addCity={addCity}
        visible={visible}
        closeModal={closeModal}
      />
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {newCities}
        <RoundButton plusButton={true} onPress={openModal} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    alignItems: "center",
    flex: 1,
    marginTop: 20
  }
});

export default App;
