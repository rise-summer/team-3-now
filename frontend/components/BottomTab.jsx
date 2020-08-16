import * as React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

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







// <Tab.Navigator
      //   screenOptions={({ route }) => ({
      //     tabBarIcon: ({ focused, color, size }) => {
      //       if (route.name === 'Home') {
      //         return (
      //           <Ionicons
      //             name={
      //               focused
      //                 ? 'ios-information-circle'
      //                 : 'ios-information-circle-outline'
      //             }
      //             size={size}
      //             color={color}
      //           />
      //         );
      //       } else if (route.name === 'Settings') {
      //         return (
      //           <Ionicons
      //             name={focused ? 'ios-list-box' : 'ios-list'}
      //             size={size}
      //             color={color}
      //           />
      //         );
      //       }
      //     },
      //   })}
      //   tabBarOptions={{
      //     activeTintColor: 'yellow',
      //     inactiveTintColor: 'gray',
      //   }}
      // >
      //   <Tab.Screen name="Search" component={Search}  />
      //   <Tab.Screen name="Profile" component={Profile} />
      // </Tab.Navigator>


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