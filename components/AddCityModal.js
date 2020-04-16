import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
} from "react-native";
import {colors} from '../utils/colors'
import RoundButton from "../components/RoundButton";

class AddCityModal extends React.Component {
  state = {
    text: ""
  };
  handleChangedText = value => {
    this.setState({
      text: value
    });
  };

  addCityHandler = () => {
    if (this.state.text.trim() === "") {
      alert("Scrivi qualcosa");
      return;
    }
    this.props.addCity(this.state.text);
    this.setState({
      text: ""
    });
  };
  render() {
    return (
      <Modal visible={this.props.visible} animationType={"slide"}>
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss()
        }}>
          <View style={styles.container}>
            <Text style={styles.title}>Aggiungi città</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                value={this.state.text}
                onChangeText={this.handleChangedText}
                style={styles.input}
                placeholder={"Aggiungi città"}
                autoCorrect={false}
              />
              <Button title={"Add"} onPress={this.addCityHandler} />
            </View>
            <RoundButton
              style={styles.roundButton}
              onPress={this.props.closeModal}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "70%",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingLeft: 10,
    marginRight: 5,
    borderBottomColor: colors.mainOrange
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20
  },
  roundButton: {
    position: "absolute",
    bottom: Dimensions.get('window').height > 600 ? 50 : 30,
  }
});

export default AddCityModal;
