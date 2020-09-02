import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ToggleButton } from 'react-native-paper';
import {WebView} from 'react-native-webview';

// Scroll view not working? 

export default class Overview extends React.Component {
    render () {
        return (
            <View style= {styles.container}>
                 <ScrollView> 
                    <View style= {styles.body}>
                
                    <Text style= {styles.title}>WHO DOES IT AFFECT?</Text>
                    <Text>Americans and Black communities around the world. . </Text>
                    <Text></Text>
                    <Text style= {styles.title}>WHY IS IT IMPORTANT?</Text>
                    <Text>Black Americans are being killed by police and the United States carceral system at extremely disproportionate rates.
                    </Text>
                    <Text></Text>
                    <Text style= {styles.title}>WHERE IS IT HAPPENING?</Text>
                    <Text>The United States </Text>
                    {/* <Text></Text> */}
                    </View>

                    <WebView
                        source={{html: require('./Globe/globe.js')()}}
                        style={{height:100, width:100}}
                    />
                    <View style= {styles.body}>
                    <Text style= {styles.title}>WHAT IS HAPPENING?</Text>
                    <Text>The Black Lives Matter movement was founded in 2013 after the murder of Trayvon Martin. On May 25th, 2020, the Minneapolis police murdered George Floyd, sparking protests across the world in the name of the #BlackLivesMatter movement, mobilizing against police brutality and anti-Black racism. Most recently, Jacob Blake of Kenosha, Wisconsin has been paralyzed by the police after being shot 7 times at close range. Protests are continually being organized as protesters demand justice for lives of Black Americans lost to anti-Black racism. </Text>
                    <Text></Text>
                   
                    </View>

                </ScrollView>


            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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