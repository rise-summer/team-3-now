import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, navigate } from "react-native";
import {createStateNavigator} from 'react-navigation'
import ImpactPage from './Impact'



export const Follow = () => {
  
  return (
    <View style={styles.screenContainer}>
        <TouchableOpacity 
        onPress={null}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{"Follow"}</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    padding: 10
  },
  appButtonContainer: {
    //elevation: 8,
    backgroundColor: "black",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16
  },
  appButtonText: {
    fontSize: 14,
    color: "#fff",
    //fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
