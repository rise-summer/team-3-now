import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Bottom from './components/General/BottomTab';
import {CauseProvider} from './components/CauseContext';

const App = () => {
    return (
      <CauseProvider>

        <NavigationContainer>
          
          <Bottom ></Bottom>

        </NavigationContainer>

      </CauseProvider>
      
  
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
