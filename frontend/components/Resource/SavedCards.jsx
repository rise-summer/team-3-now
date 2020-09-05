import React from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Text, Avatar, IconButton } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 


// Scroll View??
// Add onPress event for save
// TO DO: Add onPress events to navigate to respective pages for each card 

export default class SavedCards extends React.Component{
    
    onPress = () => {
    }

    render () {
        return (
            <ScrollView style={styles.container}>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text>    </Text>
                                <Icon name="email" size={24} color="#8390FA"></Icon>
                                <Text>   </Text>
                                <Text style= {styles.title}>Demand Justice Templates</Text>
                                            
                            </View>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Demand justice for the Black lives lost to unjustly to violence and discrimination. Select a city to email representatives... </Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="upcircleo" size={14} color="black" /> 
                                            <Text> 24 </Text>
                                            <AntDesign name="downcircleo" size={14} color="black" />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="exclamationcircleo" size={14} color="black" > report  </AntDesign>
                                            <AntDesign name="sharealt" size={14} color="black" > share  </AntDesign>
                                            <AntDesign name="heart" size={14} color="black" > save  </AntDesign>  

                                        </View>

                                    </View>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text>    </Text>
                                <Icon name="star" size={24} color="#8390FA"></Icon>
                                <Text>  </Text>
                                <Text style= {styles.title}>Impact Lebanon</Text>
                                            
                            </View>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Donate to support first responders and people affected by the recent devastating explosion in Beirut...</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="upcircleo" size={14} color="black" /> 
                                            <Text> 20 </Text>
                                            <AntDesign name="downcircleo" size={14} color="black" />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="exclamationcircleo" size={14} color="black" > report  </AntDesign>
                                            <AntDesign name="sharealt" size={14} color="black" > share  </AntDesign>
                                            <AntDesign name="heart" size={14} color="black" > save  </AntDesign>  

                                        </View>

                                    </View>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text>    </Text>
                                <Icon name="heart" size={24} color="#8390FA"></Icon>
                                <Text>  </Text>
                                <Text style= {styles.title}>Red Cross Disaster Voluteering</Text>
                                            
                            </View>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>The American Red Cross needs volunteers to care for people affected by the California Wildfires... </Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="upcircleo" size={14} color="black" /> 
                                            <Text> 16 </Text>
                                            <AntDesign name="downcircleo" size={14} color="black" />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="exclamationcircleo" size={14} color="black" > report  </AntDesign>
                                            <AntDesign name="sharealt" size={14} color="black" > share  </AntDesign>
                                            <AntDesign name="heart" size={14} color="black" > save  </AntDesign>  

                                        </View>

                                    </View>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text>    </Text>
                                <Icon name="pencil" size={24} color="#8390FA"></Icon>
                                <Text>  </Text>
                                <Text style= {styles.title}>End the Famine in Yemen</Text>
                                            
                            </View>
                                <Card.Content style={styles.cardInfo}>
                                    <Text> People in Yemem are starving to death. Sign the petition to call for the end of the war and the famine ... </Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="upcircleo" size={14} color="black" /> 
                                            <Text> 12 </Text>
                                            <AntDesign name="downcircleo" size={14} color="black" />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="exclamationcircleo" size={14} color="black" > report  </AntDesign>
                                            <AntDesign name="sharealt" size={14} color="black" > share  </AntDesign>
                                            <AntDesign name="heart" size={14} color="black" > save  </AntDesign>  

                                        </View>

                                    </View>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      paddingTop: '0%',
    },
    cardView: {
      alignItems: 'center',  
    },
    touchArea: {
      width: '100%',
      paddingTop: '1%',
    },
    container: {
      flex: 2,
      backgroundColor: 'gainsboro', 
    },

    cardRows: {
      paddingTop: '2%',  
    },
    cards: {
      width: '98%',
      marginTop: '0%',
      paddingTop: '0%'
    },
    pageContainer: {
      paddingTop: '0%',
    },
    title: {  
        fontSize: 16,
        color: "#8390FA",
        fontWeight: 'bold',
        marginBottom: '2%',
        marginTop: '4%',
    },
    cardInfo: {
        width: '100%',
        marginTop: "0%",
    
    },
  });