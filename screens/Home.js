import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import Header from "../components/Header";
import WeatherCard from '../components/WeatherCard';
import AddCityModal from '../components/AddCityModal';
import RoundButton from '../components/RoundButton';
import {Ionicons} from '@expo/vector-icons';

export default class App extends React.Component {
  state = {
    cities: [],
    visible: false,
  }
  addCity = (city) => {
    this.setState(prevState => {
      return {
        cities: prevState.cities.concat(city)
      }
    }, this.closeModal())
  }
  openModal = () => {
    this.setState({
      visible: true,
    })
  }
  closeModal = () => {
    this.setState({
      visible: false,
    })
  }
  render() {
    const cities = this.state.cities.map((city, index) => (
      <WeatherCard navigation={this.props.navigation} key={index} title={city} />
    ))
    return (
      <View style={styles.container}>
        <AddCityModal addCity={this.addCity} visible={this.state.visible} closeModal={this.closeModal} />
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
    flex: 1,
  },
  cardContainer: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20
  }
});
