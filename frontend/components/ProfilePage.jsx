import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Header from './Header';

export default function Profile ()  {
    return (
     
      <View style={styles.ScreenContainer}>
        <Header></Header>
        
        <View style= {styles.ProfileContainter}>
            <Text>Profile Screen</Text>
        </View>
       </View>
    );
};


const styles = StyleSheet.create({
   ScreenContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  ProfileContainter:{
    height:150,
    width:160,
    backgroundColor: "#E12F2F"
     
  },
  header: {
    position:"absolute",
    top:0,
    left:0,
    right:0,
    height:100,
    backgroundColor:'white',
    flexDirection:"row",
    justifyContent:"space-between",
    elevation:4,
  },
  headerText:{
      fontWeight:"bold",
      fontSize:35,
      left:30,
      bottom:30,
      position:'absolute'
  },
  menu:{
    right:30,
    bottom:30,
    position:'absolute'
  }
});