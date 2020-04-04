import React from "react";
import axios from 'axios';
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import WeatherCard from '../components/WeatherCard';
import AddCityModal from '../components/AddCityModal';
import RoundButton from '../components/RoundButton';

const APIKEY = 'eb72cb4d79dba11f135892e3198632c4';

export default class App extends React.Component {
  state = {
    cities: [],
    visible: false,
  }

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=eb72cb4d79dba11f135892e3198632c4').then(data => {
      console.warn(data)
    }).catch(error => {
      console.log(error)
    })
  }
  addCity = (city) => {
    console.log(city)
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
    console.log('hello')
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
