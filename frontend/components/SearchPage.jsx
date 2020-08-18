import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Education from './Education';



export default function Search ({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
        <Button
          title="Click Here to go to Education page"
          onPress={() => navigation.navigate('Education')}
        />
      </View>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});