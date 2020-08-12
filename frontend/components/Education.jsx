import React from 'react';
import { StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native';

import {WebView} from 'react-native-webview';
import Bottom from './BottomTab';
import {Follow} from './FollowButton';
import {HelpButton} from './HowYouCanHelpButton';
import LightInfin from './LightAndInfin';


 const Education =({navigation}) => {

   // render () {
        return (
            <View style={styles.hello}>
                
                {/* <Text style= {styles.filler}> </Text> */}
                <Text style= {styles.header}>NOW</Text>
                <Text style= {styles.hashtag}> #NameOfHashtag </Text>
                <Text>num followers</Text>
                <Follow></Follow>


                <WebView
                    source={{html: require('./Globe/globe.js')()}}
                  
                    style={{height:0, width:300}}
                />

                <LightInfin></LightInfin>
                {/* <Button title= 'How You Can Help' onPress={()=> navigation.navigate('ImpactPage')} style={styles.appButtonContainer} /> */}
                <TouchableOpacity
                   onPress={()=> navigation.navigate('ImpactPage')} 
                   style={styles.appButtonContainer} >
                  <Text style={styles.appButtonText}>{"How You Can Help"}</Text>
                </TouchableOpacity> 
                <Bottom></Bottom>
                
                {/* <HelpButton ></HelpButton> */}

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
        backgroundColor: "black",
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
