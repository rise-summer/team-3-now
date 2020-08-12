import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile  from "./ProfilePage";
import  Search from "./SearchPage";



const Tab = createBottomTabNavigator();

export default function Bottom() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'ios-information-circle'
                      : 'ios-information-circle-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name={focused ? 'ios-list-box' : 'ios-list'}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'yellow',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Search" component={Search}  />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    
  );
}










// import React from 'react';
// import { Text, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// import Profile from './ProfilePage';
// import Search from './SearchPage';


// const Tab = createBottomTabNavigator();


// export default function Bottom() {
//     return (
//         <Tab.Navigator
//             screenOptions= {({route}) => ({
//                 tabBarIcon: ({focused, color, size}) => {
//                     let iconName;
//                     if (route.name === 'Search'){
//                         iconName= focused ? 'ios-search' : 'ios-search';
//                     }else if (route.name==='Profile'){
//                         iconName= focused ? 'ios-person':'ios-person';
//                     }

//                     return <Ionicons name={iconName} size={size} color={color}/>;
//                 },
//             }) }
//         >
//         <Tab.Screen name="Search" component={Search} />
//         <Tab.Screen name="Profile" component={Profile} />

//       </Tab.Navigator>
//     );
//   }