import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Profile  from "../Profile/ProfilePage";
import  Search from "../Search/SearchPage";

import Education from '../Education/Education';
import ImpactPage from '../Impact/Impact';



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
          <Stack.Navigator>
              <Stack.Screen options={{headerTitle:false ,headerLeft: props => <HeaderText {...props}/> , headerRight:props => <MenuIcon {...props} />}} name="Search" component={Search}/>
              <Stack.Screen options={{headerTitle:false ,headerLeft: props => <HeaderText {...props}/> , headerRight:props => <MenuIcon {...props} />}} name="Education" component={Education}/>
              <Stack.Screen options={{headerTitle:false ,headerLeft: props => <HeaderText {...props}/> , headerRight:props => <MenuIcon {...props} />}} name="ImpactPage" component={ImpactPage} />
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


