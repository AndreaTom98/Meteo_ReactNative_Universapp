import React from 'react';
import {StyleSheet, View, Text, Modal, Button} from 'react-native';

const AddCityModal = (props) => {
    return (
        <Modal visible={props.visible} animationType={'slide'}>
            <View style={{flex: 1, marginTop: 20}}>
                <Text>sono un modal</Text>
                <Button title={'chiudi modal'} onPress={props.closeModal} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

})

export default AddCityModal;