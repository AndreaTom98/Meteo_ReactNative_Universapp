import React from "react";
import axios from "axios";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import WeatherCard from "../components/WeatherCard";
import AddCityModal from "../components/AddCityModal";
import RoundButton from "../components/RoundButton";

const APIKEY = "eb72cb4d79dba11f135892e3198632c4";

export default class App extends React.Component {
  state = {
    cities: [],
    visible: false
  };

  addCity = city => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&lang=it`
      )
      .then(data => {
        this.setState(prevState => {
          return {
            cities: prevState.cities.concat(data.data)
          };
        }, this.closeModal());
      })
      .catch(error => {
        console.log(error);
      });
  };
  openModal = () => {
    this.setState({
      visible: true
    });
  };
  closeModal = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    let cities = <Text>sto caricando</Text>
    if (this.state.cities) {
      console.log(this.state.cities)
      cities = this.state.cities.map((city, index) => (
        <WeatherCard
          navigation={this.props.navigation}
          key={index}
          data={city}
        />
      ));
    }

    return (
      <View style={styles.container}>
        <AddCityModal
          addCity={this.addCity}
          visible={this.state.visible}
          closeModal={this.closeModal}
        />
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {cities}
          <RoundButton plusButton={true} onPress={this.openModal} />
        </ScrollView>
      </View>
    );
  }
}

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
