import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Bottom} from './BottomNavigationBar';


  

export default class ImpactPage extends React.Component {

    render () {
        return (
            
            // change order/styling according to prototype
            <View style={styles.hello}>
                <Text style= {styles.header} >NOW</Text>
                <Text style= {styles.filler}> </Text>
                <Text style= {styles.hashtag}> #NameOfHashtag </Text>
                <Text> num followers</Text>
                <Bottom></Bottom>
                

            </View>
        );
    }
}

const styles = StyleSheet.create({
    hello: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    header:{
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    filler: {
        fontSize: 100,    
    },
    hashtag: {
      fontSize: 22,
      fontWeight: 'bold',
    }
  });