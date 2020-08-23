import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Text, Title } from 'react-native-paper';

// TO DO: Add onPress events to navigate to respective pages for each card 

export default class Cards extends React.Component {
    
    onPress = () => {
    }

    render () {
        return (
            <View style={styles.container}>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cardsGreen}>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Icon name="pencil" size={25} color='#3ECCBB'></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text style={styles.greenText}>Petitions</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchArea}>
                        <View style={styles.cardView}>
                            <Card style={styles.cardsBlue}>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Icon name="email" size={25} color='#8390FA'></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text style={styles.blueText}>Email</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cardsBlue}>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Icon name="star" size={25} color='#8390FA'></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text style={styles.blueText}>Donation Funds</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchArea}>
                        <View style={styles.cardView}>
                            <Card style={styles.cardsGreen}>
                            <   Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Icon name="calendar" size={25} color='#3ECCBB'></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text style={styles.greenText}>Events</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cardsGreen}>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Icon name="heart" size={25} color='#3ECCBB'></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text style={styles.greenText}>Volunteer</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchArea}>
                        <View style={styles.cardView}>
                            <Card style={styles.cardsBlue}>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Icon name="newspaper" size={25} color='#8390FA'></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text style={styles.blueText}>Infographics</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
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
      width: '50%',
      paddingTop: '5%',
    },
    container: {
      flex: 1,
      alignItems: 'center',
    },
    cardInfo: {
      alignItems: 'center',  
    },
    cardRows: {
      paddingTop: '5%',  
    },
    cardsGreen: {
      width: '82%', 
      borderWidth: 2,
      borderColor: '#3ECCBB',
    },
    cardsBlue: {
      width: '82%', 
      borderWidth: 2,
      borderColor: '#8390FA',
    },
    pageContainer: {
      paddingTop: '20%',
    },
    blueText: {
        color: '#8390FA',
    },
    greenText: {
        color: '#3ECCBB',
    }
  });