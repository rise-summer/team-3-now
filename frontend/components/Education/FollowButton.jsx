import React, { useState } from "react";
import {View, CheckBox, StyleSheet, TouchableOpacity, TouchableHighlight,Text, Modal} from "react-native";
import { IconButton, Colors, Checkbox } from 'react-native-paper';

export const Follow = () => {

  const [modalVisible, setModalVisible, isSelected, setSelection] = useState(false);
 
  return (
    <View style={styles.screenContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
              Alert.alert("Modal has been closed.");
          }}>

        <View>
          <View style={styles.modalView}>
                     
            <Text style={styles.text}> You are now following</Text>
            <Text style= {styles.hashtagText}>NAME OF ISSUE</Text>
            
            <View style={{ flexDirection: 'column'}, {marginRight:60}, {marginLeft:60}} >

              <View style={{ flexDirection: 'row'}}>
                  <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  color= "black"
                  style={{alignSelf:"center"}}
                  />
                  <Text style={styles.CheckBoxText}>Enable push notifications to receive breaking news updates about this cause</Text>
              </View>

                
            </View>
               <View style={styles.SaveButtonContainer}>
                  < TouchableOpacity 
                      onPress={null}>
                  <Text style={styles.SaveButtonText}>Save</Text>
                  </TouchableOpacity>

                </View> 

            <IconButton
              icon="close"
              color={Colors.black}
              size={30}
              style={styles.icon}
              onPress={() => {setModalVisible(!modalVisible);}}/>
          </View>


          
        
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.FollowButtonContainer}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.FollowButtonText}>Follow</Text>
      </TouchableHighlight>
        
   </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: { height: 1, width: 1 }, 
    shadowOpacity: 100, 
    shadowRadius: 5,
  },
  SaveButtonText:{
    fontWeight:"bold",
    color:"white",
    fontSize: 20,
    
  },
  SaveButtonContainer: {
    backgroundColor: "#3ECCBB",
    color: "white",
    elevation: 7,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    right:30,
    bottom:30,
    position:"absolute"
    
  },
  FollowButtonContainer: {
    backgroundColor: "#3ECCBB",
    color: "white",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 25
  },
  FollowButtonText: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center",
  },
  
  text:{
    alignItems: "center",
    fontSize:30,
    marginTop:-130,
    color:"#3ECCBB",
  },
  hashtagText:{
    fontWeight: 'bold',
    alignItems: "center",
    fontSize:30,
    color:"#3ECCBB",
    paddingBottom: 50,


  },
  modalView: {
    margin: 25,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical:180,
    
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
  
  CheckBoxText:{
    paddingRight:15,
    marginTop:5,
    marginLeft:5,
    flexShrink:1,
    fontSize:18
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
