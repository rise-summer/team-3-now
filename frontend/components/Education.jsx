import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview';
//import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

import {Bottom} from './BottomNavigationBar';
import {Follow} from './FollowButton'
import { HelpButton } from './HowYouCanHelpButton';


  



export default class Education extends React.Component {
    render () {
        return (
            
            <View style={styles.hello}>
                <Text style= {styles.filler}> </Text>
                <Text style= {styles.hashtag}> #NameOfHashtag </Text>
                <Text>num followers</Text>
                <Follow></Follow>


                <WebView
                    source={{html: require('./Globe/globe.js')()}}
                  
                    style={{height:0, width:300}}
                />
                
                
                <Bottom></Bottom>
                <HelpButton></HelpButton>
                

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
    
    filler: {
        fontSize: 100,    
    },
    hashtag: {
      fontSize: 22,
      fontWeight: 'bold',
    }
  });