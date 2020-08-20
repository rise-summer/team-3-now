import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Header from './Header';
export default function Profile ()  {
    return (

      <View style={styles.container}>
        <Header></Header>
        <Text>Profile Screen</Text>
        
        
       
      </View>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
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