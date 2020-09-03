import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ToggleButton } from 'react-native-paper';
import {WebView} from 'react-native-webview';

// Scroll view not working? 

export default class Overview extends React.Component {
    render () {
        return (
            
            <ScrollView> 
                <View style= {styles.body}>
            
                <Text style= {styles.title}>WHO DOES IT AFFECT?</Text>
                <Text>{this.props.value.who}</Text>
               
                <Text></Text>
                <Text style= {styles.title}>WHAT IS HAPPENING?</Text>
                <Text>{this.props.value.what}</Text>
                <Text></Text>
                <Text style= {styles.title}>WHEN?</Text>
                <Text>{this.props.value.when}</Text>
                <Text></Text>
                <Text style= {styles.title}>WHERE?</Text>
                <Text></Text>
                </View>

                <WebView
                    source={{html: require('./Globe/globe.js')()}}
                    style={{height:150, width:200}}
                />
                
                <View style= {styles.body}>
                <Text style= {styles.title}>WHY THIS MATTERS...</Text>
                <Text>{this.props.value.why}</Text>
                <Text></Text>
                </View>

            </ScrollView>

        );
    }
}


const styles = StyleSheet.create({
    title: {
        color: '#8390FA',
        alignItems: 'center',
        fontSize:16,
        paddingBottom: 4,
        paddingTop: 4
    },

    body: {
         paddingLeft: 48,
         paddingRight: 48,
         fontFamily: "Roboto",
         paddingTop: 10

    },
    
});