import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Header from '../General/Header';
import pic from './headerpic.jpg';
import Saved from './Saved';
import profilePic from './profilePic.png'

 const YourCauses =({navigation}) => {
    return (      
    <View style={styles.ScreenContainer}>
        <View style={styles.body}> 
          <View style={styles.hheader}>
            <ImageBackground source={pic} style={styles.image} >
              <View style={styles.overlay}>
                <Text></Text>
                <View style={{alignItems: 'center', height:0}}>
                  <Image source={profilePic} style={styles.proPic}></Image>
                </View>
                <Text style= {styles.headerHashtag}> Samantha </Text>
                <Text style= {styles.text}>UCLA | BLM</Text>
                <View style={{justifyContent: 'center'}}>
                </View>
              </View>
            </ImageBackground> 
          </View> 
          <ScrollView>
            <View style={{ paddingTop: 180, height: 200, width: '100%', alignItems: 'center'}}>
                <Text style = {styles.title}>Your Top Causes</Text>
                <Text></Text>
                <Text> 1. Black Lives Matter </Text>
                <Text></Text>
                <Text> 2. California Wildfires </Text>
                <Text></Text>
                <Text> 3. Yemen Resource Crisis </Text>
                <Text></Text>
                <View> 
                </View>
            </View>
            <View style={{ width: '100%', alignItems: 'center', paddingTop: 130}}>
                <Text style = {styles.title}>Other Causes You Follow</Text>
                <Text></Text>
                <Text> 4. Free Palestine Movement </Text>
                <Text></Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Education')}>
                <Text> 5. 2020 US Election </Text>
                </TouchableOpacity>
                <Text></Text>
                <Text> 6. The Murder of Hacaluu Hundesa - Ethiopia</Text>
                <Text></Text>
                <Text> 7. Uyghur Muslim Detainment - China </Text>
                <Text></Text>
                <Text> 8. Beirut Explosion - Lebanon </Text>
                <Text></Text>
                <Text> 9. COVID-19 School Reopenings - USA </Text>
                <Text></Text>
                <Text> 10. Junk Terror Bill - Philippines </Text>
                <Text></Text>
            </View>
        </ScrollView> 
        </View>
      </View>
    );
}

export default YourCauses;


const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1, 

  },
  body: {
    flex:1,
    paddingTop: '0%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor:'rgba(2,0,0,0.5)',
    height: 180,
  },

  image: {
    width: '100%',
    height: 180,
    
  },
  imageCause: {
    width: '100%',
    height: 120,
    marginTop: 20,
    
  },
  proPic: {
    alignItems: 'center',
    height:80,
    width: 80
  },
  hheader: {
    flex:1,
    width: 420,
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
    fontSize: 20,
    color: "#4C00C9",
    fontWeight: 'bold',
    justifyContent: 'center',

  },

});