import React from "react";
import { StyleSheet, View, Text, Modal, Button, TextInput } from "react-native";

class AddCityModal extends React.Component {
  state = {
    text: ""
  };
  handleChangedText = value => {
    this.setState({
      text: value
    });
  };
  render() {
    return (
      <Modal visible={this.props.visible} animationType={"slide"}>
        <View style={styles.container}>
          <Text style={styles.title}>Aggiungi città</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={this.state.text}
              onChangeText={this.handleChangedText}
              style={styles.input}
            />
            <Button title={"+"} onPress={this.props.addCity.bind(this, this.state.text)} />
          </View>

          <Button title={"chiudi modal"} onPress={this.props.closeModal} />
        </View>
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
    borderWidth: 1,
    paddingVertical: 15
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20
  }
});

export default AddCityModal;