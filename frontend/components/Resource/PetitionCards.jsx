import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Text} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 



// TO DO: Add onPress events to navigate to respective pages for each card 

export default class PetitionCards extends React.Component{
    
    onPress = () => {
    }

    render () {
        return (
            <View style={styles.container}>
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
                                        <AntDesign name="upcircleo" size={15} color="black" /> 
                                        <Text>5</Text>
                                        <AntDesign name="downcircleo" size={15} color="black" />
                                        <AntDesign name="hearto" size={15} color="black" />
                                        <AntDesign name="sharealt" size={15} color="black" />
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
                                        <AntDesign name="upcircleo" size={15} color="black" /> 
                                        <Text>5</Text>
                                        <AntDesign name="downcircleo" size={15} color="black" />
                                        <AntDesign name="hearto" size={15} color="black" />
                                        <AntDesign name="sharealt" size={15} color="black" />
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
                                        <AntDesign name="upcircleo" size={15} color="black" /> 
                                        <Text>5</Text>
                                        <AntDesign name="downcircleo" size={15} color="black" />
                                        <AntDesign name="hearto" size={15} color="black" />
                                        <AntDesign name="sharealt" size={15} color="black" />
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
                                        <AntDesign name="upcircleo" size={15} color="black" /> 
                                        <Text>5</Text>
                                        <AntDesign name="downcircleo" size={15} color="black" />
                                        <AntDesign name="hearto" size={15} color="black" />
                                        <AntDesign name="sharealt" size={15} color="black" />
                                        </View>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
      paddingTop: '5%',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'gainsboro', 
    },
    cardInfo: {
      alignItems: 'center',  
    },
    cardRows: {
      paddingTop: '5%',  
    },
    cards: {
      width: '82%',  
    },
    pageContainer: {
      paddingTop: '20%',
    }
  });