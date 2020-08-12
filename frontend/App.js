import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { ApplicationProvider,IconRegistry} from '@ui-kitten/components';
// import * as eva  from '@eva-design/eva';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Education from './components/Education';
import ImpactPage from './components/Impact';


const Stack = createStackNavigator();

 const App = () => {

  //render (){
    return (

      <NavigationContainer>
        <Stack.Navigator >
           <Stack.Screen  options={{headerShown: false}} name="Education" component={Education}/>
           <Stack.Screen name="ImpactPage" component={ImpactPage}/>
       </Stack.Navigator>

      </NavigationContainer>

        // <View style={styles.container}>
        //   <Education/>

        // </View>

    );

 // }


}
export default App;
 
    
//       <>
//       <IconRegistry icons={EvaIconsPack} />

//       <ApplicationProvider {...eva} theme={eva.light}>
  
//           <Education/>
    
//       </ApplicationProvider>

// </>
  
  //}
    



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
