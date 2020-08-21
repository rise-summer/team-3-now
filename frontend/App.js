import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Bottom from './components/General/BottomTab';


const App = () => {
    return (

      <NavigationContainer>
        <Bottom ></Bottom>
      </NavigationContainer>
  
    );

}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
