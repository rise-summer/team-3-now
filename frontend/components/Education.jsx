import React from 'react';
import { StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native';

import {WebView} from 'react-native-webview';
import Bottom from './BottomTab';
import {Follow} from './FollowButton';
import {Resource} from './ResourceButton';
import {HelpButton} from './HowYouCanHelpButton';
import LightInfin from './LightAndInfin';


 const Education =({navigation}) => {
   // render () {
        return (
            <View style={styles.hello}>
                
                {/* <Text style= {styles.filler}> </Text> */}
                
                <Text style= {styles.hashtag}> #NameOfHashtag </Text>
                <Text>num followers</Text>
                
                <View  style={{flexDirection: 'row'}}>
                    <Resource></Resource>
                    <Follow></Follow>
                </View>
                <Text style={{paddingBottom:20}}></Text>
                
                <WebView
                    source={{html: require('./Globe/globe.js')()}}
                  
                    style={{height:0, width:300}}
                />

                <LightInfin></LightInfin>

                <TouchableOpacity
                   onPress={()=> navigation.navigate('ImpactPage')} 
                   style={styles.appButtonContainer} >
                  <Text style={styles.appButtonText}>{"How You Can Help"}</Text>
                </TouchableOpacity> 
                
                <Bottom></Bottom> 

            </View>
        );
   // }
}

export default Education;

const styles = StyleSheet.create({
    hello: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: '0%',
    },
    
    filler: {
        fontSize: 100,    
    },
    hashtag: {
      fontSize: 22,
      fontWeight: 'bold',
    },
    header:{
        paddingTop: '10%',
        fontSize:30,
        fontWeight:'bold',
        paddingBottom:'5%',
    },
    appButtonContainer: {
        //elevation: 8,
        backgroundColor: "#ED254E",
        borderRadius: 35,
        paddingVertical: 14,
        paddingHorizontal: 40
      },
      appButtonText: {
        fontSize: 14,
        color: "#fff",
        alignSelf: "center",
      }   

  });
