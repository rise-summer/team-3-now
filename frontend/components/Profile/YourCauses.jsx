import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import Header from '../General/Header';
import pic from './headerpic.jpg';
import Saved from './Saved';
import TopCauses from './TopCauses';
import profilePic from './profilePic.png'

 const YourCauses =({navigation}) => {
    return (      
    <View style={styles.ScreenContainer}>
      {/* <Header></Header> */}
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
          <ScrollView>
                <View style={{ height: 200, width: '100%', alignItems: 'center'}}>
                    <Text style = {styles.title}>Your Top Causes</Text>
                    <View> 
                    </View>
                </View>
                <View style={{ width: '100%', alignItems: 'center'}}>
                    <Text style = {styles.title}>Other Causes You Follow</Text>
                    <ScrollView> 
                    </ScrollView>
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
    backgroundColor:'rgba(2,0,0,0.6)',
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
    justifyContent: 'center',

  },
    HelpButtonContainer: {
    
        backgroundColor: "#ED254E",
        borderRadius: 35,
        paddingVertical: 14,
        paddingHorizontal: 40,
        shadowColor: '#000000',
        shadowOffset: { height: 1, width: 1 }, 
        shadowOpacity: 100, 
        shadowRadius: 5,
    },
    HelpButtonText: {
        fontSize: 14,
        color: "#fff",
        alignSelf: "center",
        
    }
});