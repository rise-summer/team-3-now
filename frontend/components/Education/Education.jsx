import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {Follow} from './FollowButton';
import {Resource} from '../General/ResourceButton';
import LightInfin from './LightAndInfin';
import LightAndInfin from './LightAndInfin';

// blm education page

 const Education =({navigation}) => {
    return (
        <View style={styles.header}>
            <View>
                <Text style= {styles.headerHashtag}> #BlackLivesMatter </Text>
                <Text style= {styles.text}>15k followers</Text>
                <View style={{justifyContent: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <Resource></Resource>
                    <Follow></Follow>
                </View>
                </View>
            </View> 
            
            <Text style={{paddingBottom:20}}></Text>


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
    header: {
        flex:1,
        paddingTop: '15%',
        //flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
       
      },
      headerText: {
        textAlign:'center',
        justifyContent: 'center', 
        fontWeight: 'bold',
        fontSize: 30,
        color: '#333',
        paddingBottom: '5%',
        
      },
      text: {
        textAlign:'center',
        paddingBottom:'3%',   
      },
      filler: {
        fontSize: 450,    
      },
      headerHashtag: {
        textAlign:'center',  
        justifyContent: 'center',
          fontSize: 22,
          fontWeight: 'bold',
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