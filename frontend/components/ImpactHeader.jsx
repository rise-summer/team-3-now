import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default class Header extends React.Component {
    render () {
        return (
            
            <View style={styles.header}>
                <MaterialIcons  name='ArrowLeft' size={28} onPress={null} style={styles.icon} />
                <View>

                    <Text style= {styles.headerText}>NOW</Text>
                    <Text style= {styles.headerHashtag}> #NameOfHashtag </Text>
                    <Text>num followers</Text>
                </View>
                
               


            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 30,
      color: '#333',
      letterSpacing: 1,
    },
    headerHashtag: {
        fontSize: 22,
        fontWeight: 'bold',
      },
    icon: {
      position: 'absolute',
      left: 16,
    }
  });