import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { ApplicationProvider,IconRegistry} from '@ui-kitten/components';
import * as eva  from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Education from './components/Education';



export default  () => (
 
    //return(
      <>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider {...eva} theme={eva.light}>
  
          <Education/>
    
      </ApplicationProvider>

</>
  )
  //}
    



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
// });
