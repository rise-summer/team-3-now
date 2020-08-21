import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Profile  from "../Profile/ProfilePage";
import  Search from "../Search/SearchPage";

import Education from '../Education/Education';
import ImpactPage from '../Impact/Impact';


const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();


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
            //tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
                <Ionicons name="md-search" color={color} size={26} />
            ),
          }}> 

        {()=>(
          <Stack.Navigator>
              <Stack.Screen options={{title: 'NOW'}} name="Search" component={Search}/>
              <Stack.Screen options={{title: 'NOW'}} name="Education" component={Education}/>
              <Stack.Screen options={{title: 'NOW'}} name="ImpactPage" component={ImpactPage} />
            </Stack.Navigator>
        )}
        </Tab.Screen>

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="md-person" color={color} size={26} />
              ),
          }}
        />
        
      
    </Tab.Navigator>
      
    
  );
}


