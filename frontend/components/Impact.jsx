import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Bottom} from './BottomNavigationBar';
import  Header from "ImpactHeader";



export default class ImpactPage extends React.Component {
    render () {
        return (
            <View style={styles.hello}>
                <Header></Header>
               
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
    }

  });