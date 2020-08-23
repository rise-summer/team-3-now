import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native';
import {Follow} from './FollowButton';
import {Resource} from '../General/ResourceButton';
import LightInfin from './LightAndInfin';
import LightAndInfin from './LightAndInfin';

// blm education page

const image = { uri: "https://cdn.cnn.com/cnnnext/dam/assets/200622104651-black-lives-matter-support-impact-0613-exlarge-169.jpg"};
 const Education =({navigation}) => {
    return (
        <View style={styles.body}>
          <View style={styles.header}>
            <ImageBackground source={image} style={styles.image} >
              <View style={styles.overlay}>
                <Text></Text>
                <Text style= {styles.headerHashtag}> Black Lives Matter </Text>
                <Text style= {styles.text}>15k followers</Text>
                <View style={{justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Resource></Resource>
                    <Follow></Follow>
                </View>
                </View>
              </View>
            </ImageBackground> 
          </View>  
          <LightAndInfin></LightAndInfin>

          <TouchableOpacity
              onPress={()=> navigation.navigate('ImpactPage')} 
              style={styles.HelpButtonContainer} >
            <Text style={styles.HelpButtonText}>{"How you can help"}</Text>
          </TouchableOpacity> 

          <Text></Text>
            
        </View>
    );
}

export default Education;


const styles = StyleSheet.create({
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
  header: {
    flex:1,
    width: 400,
    paddingTop: '0%',
    paddingLeft: '0%',
    alignItems: 'center',
  },
  text: {
    textAlign:'center',
    paddingTop:'1%',
    paddingBottom:'3%', 
    fontSize: 18,
    color: 'white',
  },

  headerHashtag: {
    textAlign:'center',  
    justifyContent: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
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