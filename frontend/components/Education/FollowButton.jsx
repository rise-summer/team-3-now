import React, { useState } from "react";
import {View, CheckBox, StyleSheet, TouchableOpacity, TouchableHighlight,Text, Modal} from "react-native";
import { IconButton, Colors, Checkbox } from 'react-native-paper';


export default class Testing extends React.Component{

    constructor(props) {
        super(props);
        this.state = {following: false, modalVisible: false, setModalVisible: false}; 
      }
      
      onPress = (fol, modal) => {
        this.setState({
          following: fol,
          modalVisible: modal
        });
      }
    render () {
        if (this.state.following) {
            return (
              <View style={styles.screenContainer}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}>
          
                  <View>
                    <View style={styles.modalView}>
                               
                      <Text style={styles.text}> You are now following this cause</Text>
                      {/* <Text style= {styles.hashtagText}>NAME OF ISSUE</Text> 
        
                         <View style={styles.SaveButtonContainer}>
                            < TouchableOpacity 
                                onPress={() => this.onPress(this.state.following, false)}>
          
                            <Text style={styles.SaveButtonText}>Save</Text>
                            </TouchableOpacity>
          
                        </View> */}
          
                      <IconButton
                        icon="close"
                        color={Colors.black}
                        size={30}
                        style={styles.icon}
                        onPress={() => this.onPress(this.state.following, false)}/>
                    </View>
          
                  </View>
                </Modal>
          
                <TouchableHighlight
                  style={styles.FollowingButtonContainer}
                  onPress={() => this.onPress(false, true)}
                >
                  <Text style={styles.FollowingButtonText}>Following</Text>
                </TouchableHighlight>
                  
             </View>
            );
          } else {
            return (
              <View style={styles.screenContainer}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}>
          
                  <View>
                    <View style={styles.modalView}>
                               
                      <Text style={styles.text}> You have unfollowed this cause </Text>
                      {/*<Text style= {styles.hashtagText}>NAME OF ISSUE</Text>
                         <View style={styles.SaveButtonContainer}>
                            <TouchableOpacity 
                                onPress={() => this.onPress(this.state.following, false)}>
          
                                <Text style={styles.SaveButtonText}>Save</Text>
                            </TouchableOpacity>
          
                         </View> */}
                        <IconButton
                        icon="close"
                        color={Colors.black}
                        size={30}
                        style={styles.icon}
                        onPress={() => this.onPress(this.state.following, false)}/>
                      
                    </View>
          
                  </View>
                </Modal>
          
                <TouchableHighlight
                  style={styles.FollowButtonContainer}
                  onPress={() => this.onPress(true, true)}
                >
                  <Text style={styles.FollowButtonText}>Follow</Text>
                </TouchableHighlight>
                  
             </View>
            );
        
         }

    }
}

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
    fontSize: 16,
    
  },
  SaveButtonContainer: {
    backgroundColor: "#4C00C9",
    color: "white",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    right:130,
    bottom:20,
    position:"absolute",
    shadowColor: '#000000',
    shadowOffset: { height: 1, width: 1 }, 
    shadowOpacity: 100, 
    shadowRadius: 5,
    
  },
  FollowButtonContainer: {
    backgroundColor: "white",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 25
  },
  FollowingButtonContainer: {
    backgroundColor: "#4C00C9",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 25
  },
  FollowButtonText: {
    fontSize: 14,
    color: "#4C00C9",
    alignSelf: "center",
  },
  FollowingButtonText: {
    fontSize: 14,
    color: "white",
    alignSelf: "center",
  },
  text:{
    alignItems: "center",
    fontSize:16,
    marginTop:-74,
    color:"#4C00C9",
  },
  hashtagText:{
    fontWeight: 'bold',
    alignItems: "center",
    fontSize:16,
    color:"#4C00C9",
    paddingBottom: 50,


  },
  modalView: {
    margin: 20,
    marginTop: 110,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical:0,
    paddingTop: 120,
    height: 10,
    
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10
  },
  
  CheckBoxText:{
    paddingRight:20,
    marginTop:0,
    marginLeft:0,
    flexShrink:1,
    fontSize:12,
    alignItems: 'center'
  },
  icon:{
    ...StyleSheet.absoluteFillObject,
    color:"black",
    alignSelf: 'flex-end',
    marginTop: 15,
    paddingLeft: 20,
    position: 'absolute',
  },
FollowButtonPressedContainer: {
  backgroundColor: "#4C00C9",
  borderRadius: 18,
  paddingVertical: 10,
  paddingHorizontal: 25
},
FollowButtonPressedText: {
  fontSize: 14,
  color: "white",
  alignSelf: "center",
  
},

});
