import * as React from 'react';
import { Text, View, StyleSheets, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Profile  from "../Profile/ProfilePage";
import  Search from "../Search/SearchPage";
import Header from '../General/Header';

import Education from '../Education/Education copy';
import Impact from '../Impact/Impact';
import ResourcePage from '../Resource/ResourcePage';
import logo from './logo.png';
import YourCauses from '../Profile/YourCauses';


function MenuIcon() {
  return (
    <View style= {{right:30,bottom:30,position:'absolute'}}>
      <Ionicons name="md-menu" color={'#049F76'} size={30}/>
    </View>
    
  );
}
function HeaderText(){
  return (
    <Text style={{fontWeight:"bold",fontSize:25,left:30,bottom:30,position:'absolute'}}> NOW</Text>
  );

}


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();


function LogoTitle() {
  return (
    <Image
      style={{ width: 60, height: 28, marginLeft: 280}}
      source={logo}
    />
  );
}
export default function Bottom() {
  return (
    
    <Tab.Navigator
      initialRouteName="Search"
      activeColor= "#3ECCBB"
      inactiveColor="gray"
      barStyle= { {backgroundColor: "white"}}
      style={{ backgroundColor: 'white' }}>
      
        <Tab.Screen 
          name="Search" 
          options={{
            tabBarIcon: ({ color }) => (
                <Ionicons name="md-search" color={color} size={26} />
            ),
          }}> 

        {()=>(
          <Stack.Navigator >
              <Stack.Screen name="Search" component={Search} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
              <Stack.Screen name="Education" component={Education} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
              <Stack.Screen name="Impact" component={Impact} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
              <Stack.Screen name="ResourcePage" component={ResourcePage} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
            </Stack.Navigator>
        )}
        </Tab.Screen>

        <Tab.Screen 
          name="Profile" 
          options={{
            //tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-person" color={color} size={26} />
            ),
          }}> 

        {()=>(
          <Stack.Navigator >
              <Stack.Screen name="Profile" component={Profile} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
              <Stack.Screen name="YourCauses" component={YourCauses} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
            </Stack.Navigator>
        )}
        </Tab.Screen>

      
    </Tab.Navigator>
      
    
  );
}


