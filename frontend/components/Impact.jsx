import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {Bottom} from './BottomTab ';

import { MaterialIcons } from '@expo/vector-icons';

import {SubmitResource} from './SubmitResourceButton';
import Cards from './Cards';


const ImpactPage =({navigation}) => {
   // render () {
        return (
            <View style={styles.header}>
                <MaterialIcons  name="arrow-back" size={28} onPress={null} style={styles.icon} />
                <View>

                    <Text style= {styles.headerText}>NOW</Text>
                    <Text style= {styles.headerHashtag}> #NameOfHashtag </Text>
                    <Text style= {styles.text}>num followers</Text>

                </View>
                <SubmitResource></SubmitResource>
                <View style={styles.cards}>
                  <Cards></Cards>
                </View>
                <Text style={styles.filler}></Text>
                {/* <Bottom></Bottom> */}


            </View>
            
        );
   // }

}

export default ImpactPage;


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
      cards: {
        paddingTop: '10%',
      },
      icon: {
        paddingTop: '18%',
        position:'absolute',
        left: 16,
      }
    });