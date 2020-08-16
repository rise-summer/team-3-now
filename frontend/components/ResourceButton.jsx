import React, { useState } from "react";
import { View, CheckBox, StyleSheet, TouchableOpacity, TouchableHighlight,Text, Modal, Picker } from "react-native";
import {createStateNavigator} from 'react-navigation';
import {Dropdown} from 'react-native-material-dropdown-v2';
import ImpactPage from './Impact'
// import { Ionicons } from '@expo/vector-icons';
import { IconButton, Colors } from 'react-native-paper';



export const Resource = () => {
  const [modalVisible, setModalVisible, isSelected, setSelection] = useState(false);
  

  return (

    <View style={styles.screenContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
              Alert.alert("Modal has been closed.");
          }}
        >
        <View >
          <View style={styles.modalView}>
                     
            <Text style={styles.submitText}> Submit a Resource</Text>
            <IconButton
              icon="close"
              color={Colors.black}
              size={30}
              style={styles.icon}
              onPress={() => {setModalVisible(!modalVisible);}}/>
          </View>

          <View style={styles.checkboxContainer}>
              <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={{paddingLeft:-100}}/>
              <Text> this is checkbox</Text>
          </View>
          
        </View>
      </Modal>
      <TouchableHighlight
        style={styles.appButtonContainer}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.appButtonText}>Resource</Text>
      </TouchableHighlight>
        
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    padding: 10,

  },
  DropdownBox:{
        backgroundColor:"#8390FA",

  },
  submitText:{
    fontSize:30,
    fontWeight:'bold',
    marginRight:-10,
    marginTop:-160,
    color:"#3ECCBB",
  },
  appButtonContainer: {
    backgroundColor: "#8390FA",
    color: "white",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 25
  },
  appButtonText: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center",
  },
  modalView: {
    margin: 25,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical:180,
    paddingHorizontal: 50,
    
    //padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  CheckBoxContainer:{
      //textAlign:"center",
      marginLeft:20,
      flexDirection:"row",
     // marginLeft:50,
    
  },
  openButton: {
    backgroundColor: "#3ECCBB",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    elevation: 6
  },
  icon:{
    ...StyleSheet.absoluteFillObject,
    color:"black",
    alignSelf: 'flex-end',
    marginTop: 15,
    paddingLeft: 15,
    position: 'absolute',
  }
});