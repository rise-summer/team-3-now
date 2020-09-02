import React, { useState } from "react";
import { View, CheckBox, StyleSheet, TouchableOpacity, TextInput ,TouchableHighlight,Text, Modal, Picker } from "react-native";
import { KeyboardAwareScrollView  } from "react-native-keyboard-aware-scroll-view";
import { IconButton, Colors } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';


export const Resource = () => {

  const [modalVisible, setModalVisible, isSelected, setSelection] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Donation Fund");
  const [title, setTitle] = useState(' ');
  const [link, setLink] = useState(' ');
  const [description, setDescription] = useState(' ');
  
   return (

          <View style={styles.screenContainer}>
            
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
              }}>

            <KeyboardAwareScrollView>
              <View style={styles.modalView}>

                <Text style={styles.submitText}> Submit a Resource</Text>
                    <View style={{ flexDirection: 'column'}}>
                        

                        <View >
                          <DropDownPicker 
                              style={styles.DropdownBox}
                              items={[
                                  {label: "Petition", value: "Petition" },
                                  {label: "Email Template" , value: "Email Template" },
                                  {label: "Donation Fund", value: "Donation Fund"},
                                  {label: "Event", value: "Event"},
                                  {label: "Volunteer Opportunity" , value: "Volunteer Opportunity" },
                                  {label: "Infographic", value: "Infographic"},
                              ]}
                              containerStyle={{height: 40}}
                              itemStyle={{
                                  flex: 1,
                                  justifyContent: 'flex-start'
                              }}
                       
                          />
                        </View>

                    
                        <View style = {{paddingTop:30}}>
                            <TextInput style = {styles.input}
                            placeholder = "Title of Resource"
                            onChangeText = {title => setTitle(title)}
                            />
                
                            <TextInput style = {styles.input}
                            placeholder = "Link"
                            onChangeText = {link => setLink(link)}
                           />

                            <TextInput style = {styles.DescriptionInput}
                            placeholder = "Description"
                            onChangeText = {description => setDescription(description)}
                           />
                        </View>

                        <View style={{ flexDirection: 'row'}}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                color="black"
                                style={{alignSelf:"center"}}/>

                            <Text style={styles.CheckBoxText}>I verify that this is a credible resource and understand that NOW has the right to remove this post at any time</Text>
                        </View>
                    </View>
                
                    
                    <View style={styles.SubmitButtonContainer}>
                            < TouchableOpacity 
                                onPress={null}>
                            <Text style={styles.SubmitButtonText}>Submit</Text>
                            </TouchableOpacity>

                    </View>

                    <IconButton
                        icon="close"
                        color={Colors.black}
                        size={30}
                        style={styles.icon}
                        onPress={() => {setModalVisible(!modalVisible);}}/>

                </View>

                </KeyboardAwareScrollView>   

            </Modal>

             

          <TouchableHighlight
            style={styles.ResourceButtonContainer}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text style={styles.ResourceButtonText}>+ Resource</Text>
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
  input: {
    marginBottom:30,
    height: 40,
    borderColor: '#8390FA',
    borderWidth: 1,
    borderRadius:20,
    paddingLeft:20,
    paddingRight:20,
    
    
 },
 DescriptionInput: {
    height: 100,
    borderColor: '#8390FA',
    borderWidth: 1,
    borderRadius:20,
    paddingLeft:20,
    paddingRight:20,
  color: 'black',
    marginBottom:30,
  },
  DropdownBox:{
        borderTopLeftRadius: 24,
        borderTopRightRadius:24,
        borderBottomLeftRadius:24,
        borderBottomRightRadius:24,
        height: 44,
        width: 200, 
        borderColor: '#8390FA',

  },
  SubmitButtonText:{
    fontWeight:"bold",
    color:"white",
    fontSize: 16,
    
  },
  SubmitButtonContainer: {
    backgroundColor: "#4C00C9",
    color: "white",
    elevation: 7,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    right:30,
    bottom:30,
    position:"absolute",
     
  },

  submitText:{
    justifyContent:"center",//Centered vertically
    //alignItems: 'center',// Centered horizontally
    fontSize:18,
    fontWeight:'bold',
    marginTop:-60,
    marginBottom: 30,
    color:"#4C00C9",
  },
  ResourceButtonContainer: {
    backgroundColor: "#ED254E",
    color: "white",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 25
  },
  ResourceButtonText: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center",
  },
  modalView: {
    margin: 20,
    marginTop: 100,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical:96,
    paddingHorizontal: 30,
  
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
    color: "black",
    paddingRight:15,
    marginLeft:5,
    fontSize:14
  
  },
  icon:{
    ...StyleSheet.absoluteFillObject,
    color:"black",
    marginTop: 15,
    paddingLeft: 15,
    position: 'absolute',
  }
});