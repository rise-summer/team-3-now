import * as React from 'react';
import { Text, View, StyleSheets, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Profile  from "../Profile/ProfilePage";
import  Search from "../Search/SearchPage";
import Header from '../General/Header';

import Education from '../Education/Education';
import Education2 from '../Education/Education2';
import Impact from '../Impact/Impact';
import ResourcePage from '../Resource/ResourcePage';
import logo from './logo.png';
import YourCauses from '../Profile/YourCauses';

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();


function LogoTitleF() {
  return (
    <Image
      style={{ width: 78, height: 30, marginLeft: 320}}
      source={logo}
    />
  );
}
function LogoTitle() {
  return (
    <Image
      style={{ width: 78, height: 30, marginLeft: 260}}
      source={logo}
    />
  );
}
export default function Bottom() {
  return (
    
    <Tab.Navigator
      initialRouteName="Search"
      activeColor= "#4C00C9"
      inactiveColor="gray"
      barStyle= { {backgroundColor: "white"}}
      style={{ backgroundColor: 'white' }}>
      
        <Tab.Screen 
          name="Search" 
          options={{
            //tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
                <Ionicons name="md-search" color={color} size={28} />
            ),
          }}> 

        {()=>(
          <Stack.Navigator >
              <Stack.Screen name="Search" component={Search} options={{ headerTitle: props => <LogoTitleF {...props} /> }}/>
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
              <Ionicons name="md-person" color={color} size={28} />
            ),
          }}> 

        {()=>(
          <Stack.Navigator >
              <Stack.Screen name="Profile" component={Profile} options={{ headerTitle: props => <LogoTitleF {...props} /> }}/>
              <Stack.Screen name="YourCauses" component={YourCauses} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
              <Stack.Screen name="Education" component={Education2} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
              {/* <Stack.Screen name="Impact" component={Impact} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
              <Stack.Screen name="ResourcePage" component={ResourcePage} options={{ headerTitle: props => <LogoTitle {...props} /> }} /> */}
            </Stack.Navigator>
        )}
        </Tab.Screen>

      
    </Tab.Navigator>
      
    
  );
}


