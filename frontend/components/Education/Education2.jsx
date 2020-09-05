import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native';
import Follow from './FollowButton';
import {Resource} from '../General/ResourceButton';
import LightAndInfin from './LightAndInfin2';
import {CauseProvider, CauseContext,CauseDispatchContext, CauseDetails} from '../CauseContext';
import Header from '../General/Header';


// blm education page

const image = { uri: "https://ichef.bbci.co.uk/news/410/cpsprodpb/9665/production/_113810583_index_promo_poll_tracker_bw_976.png"};
 const Education2 =({navigation}) => {
    return (      
    <View style={styles.ScreenContainer}>

        <View style={styles.body}> 
          <View style={styles.hheader}>
            <ImageBackground source={image} style={styles.image} >
              <View style={styles.overlay}>
                <Text></Text>
                <Text style= {styles.headerHashtag}> 2020 US Election </Text>
                <Text style= {styles.text}>10k followers</Text>
                <View style={{justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Follow></Follow>
                </View>
                </View>
              </View>
            </ImageBackground> 
          </View>  
          <LightAndInfin></LightAndInfin>

          <TouchableOpacity
              onPress={()=> navigation.navigate('Impact')} 
              style={styles.HelpButtonContainer} >
            <Text style={styles.HelpButtonText}>{"How you can help"}</Text>
          </TouchableOpacity> 

          <Text></Text>
            
        </View>
      </View>
    );
}

export default Education2;


const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
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
  hheader: {
    flex:1,
    width: 420,
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