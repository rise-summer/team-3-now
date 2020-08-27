import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Header from '../General/Header';
import pic from './headerpic.jpg';
import Saved from './Saved';
import TopCauses from './TopCauses';
import profilePic from './profilePic.png';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

 const Profile =({navigation}) => {
    return (      
    <View style={styles.ScreenContainer}>
      <Header></Header>
        <View style={styles.body}> 
          <View style={styles.hheader}>
            <ImageBackground source={pic} style={styles.image} >
              <View style={styles.overlay}>
                <Text></Text>
                <View style={{alignItems: 'center', height:0}}>
                  <Image source={profilePic} style={styles.proPic}></Image>
                </View>
                <Text style= {styles.headerHashtag}> Jane Doe </Text>
                <Text style= {styles.text}>activist | learner</Text>
                <View style={{justifyContent: 'center'}}>
                </View>
              </View>
            </ImageBackground> 
          </View>  
          <View>
              <View style={{ height: 160, marginTop: 60, width: '100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Text style = {styles.title}>Your Top Causes</Text>
              <Text> </Text>
              <TouchableOpacity
                  onPress={()=> navigation.navigate('YourCauses')} >
                  <AntDesign name="right" size={20} color= "#8390FA" /> 
                </TouchableOpacity> 
                </View>
          </View>
          <Text></Text>
          <Saved></Saved>  
        </View>
      </View>
    );
}

export default Profile;


const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1, 

  },
  body: {
    flex:1,
    paddingTop: '0%',
    backgroundColor: '#fff',

  },
  overlay: {
    backgroundColor:'rgba(2,0,0,0.6)',
    height: 180,
  },

  image: {
    width: '100%',
    height: 180,
    
  },
  proPic: {
    alignItems: 'center',
    height:80,
    width: 80
  },
  hheader: {
    flex:1,
    width: 400,
    paddingTop: '0%',
    paddingLeft: '0%',
    alignItems: 'center',
  },
  text: {
    textAlign:'center',
    paddingTop:'0%',
    paddingBottom:'3%', 
    fontSize: 16,
    color: 'white',
  },

  headerHashtag: {
    textAlign:'center',  
    justifyContent: 'center',
    fontSize: 20,
    paddingTop: '22%',
    fontWeight: 'bold',
    color: 'white',
  },

  title: {
    fontSize: 18,
    color: "#8390FA",
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    paddingLeft: 30,

  },
});