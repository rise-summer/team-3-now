import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text, navigate } from "react-native";
import {createStateNavigator} from 'react-navigation'




export const SubmitResource = () => {
  
  return (
    <View style={styles.screenContainer}>
        <TouchableOpacity 
        onPress={null}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{"Submit a Resource"}</Text>
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
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  appButtonText: {
    fontSize: 14,
    color: "#fff",
    alignSelf: "center",
  }
});
