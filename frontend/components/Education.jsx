import React, {useContext} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {WebView} from 'react-native-webview';
import {Follow} from './FollowButton';
import {Resource} from './ResourceButton';
import LightInfin from './LightAndInfin';
import {CauseContext} from './CauseContext';

 const Education =({navigation}) => {
         //const [causes, setCauses]= useContext(CauseContext);
         return (
            
            <View style={styles.hello}>
                
                <Text style= {{fontSize:100}}> </Text>
                <Text style= {styles.hashtag}> #hashtag </Text>
                <Text>num followers</Text>
                
                <View style={{flexDirection: 'row'}}>
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
                   style={styles.HelpButtonContainer} >
                  <Text style={styles.HelpButtonText}>{"How You Can Help"}</Text>
                </TouchableOpacity> 
                
            </View>
            
        );
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
    HelpButtonContainer: {
       
        backgroundColor: "#ED254E",
        borderRadius: 35,
        paddingVertical: 14,
        paddingHorizontal: 40
    },
    HelpButtonText: {
        fontSize: 14,
        color: "#fff",
        alignSelf: "center",
    }   
});
