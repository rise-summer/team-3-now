import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Resource} from '../General/ResourceButton';
import Cards from './Cards';
import {CauseProvider, CauseContext,CauseDispatchContext} from '../CauseContext';

const ImpactPage =({navigation}) => {
          const CauseDetails = useContext(CauseContext);
          const setCauseDetails = useContext(CauseDispatchContext);

           return (
            <View style={styles.header}>
                {/* <MaterialIcons  name="arrow-back" size={28} onPress={null} style={styles.icon} /> */}
                <View>
                    <Text style= {styles.headerHashtag}> {CauseDetails.cause2.hashtagName}</Text>
                    <Text style= {styles.text}>num followers</Text>
                    <View style={{justifyContent: 'center'}}>
                          <Resource></Resource>
                    </View>
                </View> 

                <View style={styles.cards}>
                  <Cards></Cards>
                </View>
                <Text style={styles.filler}></Text>
               
                

            </View>
            
        );
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