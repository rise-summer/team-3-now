import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const AppButton = ({title }) => (
    
  <TouchableOpacity 
    onPress={()=>{
        if (title== 'FOLLOW'){
            title='FOLLOWING'
        }
        else if (title == 'FOLLOWING'){
            title='FOLLOW'
        }
        
    }} 
    style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export const Follow = () => {
    
  return (
    <View style={styles.screenContainer}>
        
      <AppButton title = 'FOLLOW'/>
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
