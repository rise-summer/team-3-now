import React from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Text} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 


// Scroll View??
// Add onPress event for save
// TO DO: Add onPress events to navigate to respective pages for each card 

export default class PetitionCards extends React.Component{
    
    onPress = () => {
    }

    render () {
        return (
            <ScrollView style={styles.container}>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                                <Card.Title title = "P1"/>
                            
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="upcircleo" size={15} color="black" /> 
                                            <Text> 5 </Text>
                                            <AntDesign name="downcircleo" size={15} color="black" />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="exclamationcircleo" size={15} color="black" > report  </AntDesign>
                                            <AntDesign name="sharealt" size={15} color="black" > share  </AntDesign>
                                            <AntDesign name="hearto" size={15} color="black" > save  </AntDesign>  

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
                                <Card.Title title = "P2"/>
                            
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="upcircleo" size={15} color="black" /> 
                                            <Text> 5 </Text>
                                            <AntDesign name="downcircleo" size={15} color="black" />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="exclamationcircleo" size={15} color="black" > report  </AntDesign>
                                            <AntDesign name="sharealt" size={15} color="black" > share  </AntDesign>
                                            <AntDesign name="hearto" size={15} color="black" > save  </AntDesign>
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
                                <Card.Title title = "P3"/>
                            
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="upcircleo" size={15} color="black" /> 
                                            <Text> 5 </Text>
                                            <AntDesign name="downcircleo" size={15} color="black" />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="exclamationcircleo" size={15} color="black" > report  </AntDesign>
                                            <AntDesign name="sharealt" size={15} color="black" > share  </AntDesign>
                                            <AntDesign name="hearto" size={15} color="black" > save  </AntDesign>
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
                                <Card.Title title = "P4"/>
                            
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="upcircleo" size={15} color="black" /> 
                                            <Text> 5 </Text>
                                            <AntDesign name="downcircleo" size={15} color="black" />
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                            <AntDesign name="exclamationcircleo" size={15} color="black" > report  </AntDesign>
                                            <AntDesign name="sharealt" size={15} color="black" > share  </AntDesign>
                                            <AntDesign name="hearto" size={15} color="black" > save  </AntDesign>
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
      paddingTop: '2%',
    },
    container: {
      flex: 2,
      backgroundColor: 'gainsboro', 
    },

    cardRows: {
      paddingTop: '2%',  
    },
    cards: {
      width: '100%',  
    },
    pageContainer: {
      paddingTop: '0%',
    }
  });