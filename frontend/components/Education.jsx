import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Education extends React.Component {
    render () {
        return (
            
            <View style={styles.hello}>
                <Text style= {styles.filler}> </Text>
                <Text style= {styles.hashtag}> #NameOfHashtag </Text>
                <Text> 15k followers</Text>
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