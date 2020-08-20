import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Header ()  {
    return (


        <View style={styles.header}>
            <Text style={styles.headerText}>NOW</Text>
            <View style={styles.menu}>
              <Ionicons
                name="md-menu" 
                size={30} 
                color={"#049F76"} 
                onPress={null}/>
            </View>
        
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
      fontSize:25,
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