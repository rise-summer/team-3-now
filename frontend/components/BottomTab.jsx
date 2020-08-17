import * as React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile  from "./ProfilePage";
import  Search from "./SearchPage";






const Tab = createMaterialBottomTabNavigator();





export default function Bottom() {
  return (
    
    <Tab.Navigator
      initialRouteName="Search"
      activeColor="black"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'white' }}>
      
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
          }}
        />
        
      
    </Tab.Navigator>
      
    
  );
}


