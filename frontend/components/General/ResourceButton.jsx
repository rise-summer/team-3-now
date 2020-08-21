import React, { useState } from "react";
import { View, CheckBox, StyleSheet, TouchableOpacity, TextInput ,TouchableHighlight,Text, Modal, Picker } from "react-native";
import { KeyboardAwareScrollView  } from "react-native-keyboard-aware-scroll-view";
import { IconButton, Colors } from 'react-native-paper';


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
                            <Picker
                                selectedValue={selectedValue}
                                style={{height: 50,width: 210, color:"white",backgroundColor:"#8390FA", borderBottomRightRadius:20, borderBottomLeftRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20}}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                
                            <Picker.Item label="Petition" value="Petition"  color={"#8390FA"}/>
                            <Picker.Item label="Email Template" value="Email Template" color={"#8390FA"}  />
                            <Picker.Item label="Donation Fund" value="Donation Fund" color={"#8390FA"}  />
                            <Picker.Item label="Event" value="Event" color={"#8390FA"}/>
                            <Picker.Item label="Volunteer Opportunity" value="Volunteer Opportunity" color={"#8390FA"}/>
                            <Picker.Item label="Infographic" value="Infographic"color={"#8390FA"}  />
                            </Picker> 
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
            <Text style={styles.ResourceButtonText}>Resource</Text>
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
   
    marginBottom:30,
  },
  DropdownBox:{
        borderTopLeftRadius: 50,
        borderTopRightRadius:40,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        height: 50,
        width: 210, 
        color:"white",
        backgroundColor:"#8390FA",
  },
  SubmitButtonText:{
    fontWeight:"bold",
    color:"white",
    fontSize: 20,
    
  },
  SubmitButtonContainer: {
    backgroundColor: "#3ECCBB",
    color: "white",
    elevation: 7,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    right:30,
    bottom:30,
    position:"absolute",
     
  },

  submitText:{
    justifyContent:"center",//Centered vertically
    //alignItems: 'center',// Centered horizontally
    fontSize:30,
    fontWeight:'bold',
    marginTop:-80,
    marginBottom: 30,
    color:"#3ECCBB",
  },
  ResourceButtonContainer: {
    backgroundColor: "#8390FA",
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
    margin: 25,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical:130,
    paddingHorizontal: 30,
  
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
    color: "black",
    paddingRight:15,
    marginLeft:5,
    fontSize:18
  
  },
  icon:{
    ...StyleSheet.absoluteFillObject,
    color:"black",
    marginTop: 15,
    paddingLeft: 15,
    position: 'absolute',
  }
});