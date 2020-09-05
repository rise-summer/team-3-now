import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ToggleButton } from 'react-native-paper';
import {WebView} from 'react-native-webview';
import globe from './globe.png'


// Scroll view not working? 

export default class Overview extends React.Component {
    
    render () {
        return (
            <View style= {styles.container}>
                 <ScrollView> 
                    <View style= {styles.body}>
                
                    <Text style= {styles.title}>WHO DOES IT AFFECT?</Text>
                    <Text style = {styles.text} >Residents of the United States and its territories.</Text>
                    <Text></Text>
                    <Text style= {styles.title}>WHY IS IT IMPORTANT?</Text>
                    <Text style = {styles.text}>Presidential elections keep democracy functioning and allow United States citizens to exercise their right to vote and select their own government.  
                    </Text>
                    <Text></Text>
                    <Text style= {styles.title}>WHERE IS IT HAPPENING?</Text>
                    <Text style = {styles.text}>The United States </Text>
                    {/* <Text></Text> */}

                    {/* <WebView
                        source={{html: require('./Globe/globe.js')}}
                        style={{height:150, width:150, alignItems: 'center'}}
                    /> */}
                    <Text></Text>

                    <Image source={globe} style={styles.globe}></Image>

                    <Text></Text>
                    <Text style= {styles.title}>WHAT IS HAPPENING?</Text>
                    <Text style = {styles.text}>On November 3rd, 2020, eligible voters will elect a new president or re-elect Republican incumbent Donald Trump. His Democratic opponent is Joe Biden, the Vice President of former President Barack Obama. The presidential election will occur simultaneously with elections to the Senate and the House of Representatives.
 </Text>
                    <Text></Text>
                   
                    </View>

                </ScrollView>


            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: '#8390FA',
        alignItems: 'center',
        fontSize:18,
        paddingBottom: 4,
        paddingTop: 4
    },

    body: {
         paddingLeft: 48,
         paddingRight: 48,
         fontFamily: "Roboto",
         paddingTop: 10

    },
    text: {
        fontSize: 16
    },
    globe: {
        width: 160,
        height: 160,
        backgroundColor: 'white',
        alignItems: 'center'

    }
    
});