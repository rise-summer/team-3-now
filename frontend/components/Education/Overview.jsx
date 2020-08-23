import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ToggleButton } from 'react-native-paper';
import {WebView} from 'react-native-webview';

export default class Overview extends React.Component {
    render () {
        return (
            
            <ScrollView> 
                <View style= {styles.body}>
            
                <Text style= {styles.title}>WHO DOES IT AFFECT?</Text>
                <Text>Black Americans and other members of the Black community around the world.</Text>
                <Text></Text>
                <Text style= {styles.title}>WHAT IS HAPPENING?</Text>
                <Text>A movement advocating for non-violent civil disobidience in protest against 
                    incidents of police brutality and all racially motivated violence against Black-Americans. </Text>
                <Text></Text>
                <Text style= {styles.title}>WHEN?</Text>
                <Text>Black Americans and other members of the Black community around the world.</Text>
                <Text></Text>
                <Text style= {styles.title}>WHERE?</Text>
                <Text></Text>
                </View>

                {/* need to fix this- not showing up */}
                <WebView
                    source={{html: require('./Globe/globe.js')()}}
                    style={{height:100, width:100}}
                />
                <View style= {styles.body}>
                <Text style= {styles.title}>WHY THIS MATTERS...</Text>
                <Text>Black Americans are being discriminated against, targetted and killed at disproportionate rates.</Text>
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
    },

    body: {
         paddingLeft: 48,
         paddingRight: 48,
         fontFamily: "Roboto",

    },
    
});