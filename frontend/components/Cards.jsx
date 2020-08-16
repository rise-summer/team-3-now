import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ToggleButton, Card, Text, Title } from 'react-native-paper';

// TO DO: Add onPress events to respective pages for each card 

export default class Cards extends React.Component {
    
    onPress = () => {
    }

    render () {
        return (
            <View style={styles.container}>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttons}> 
                        <View style={styles.card}>
                            <Card style={styles.test}>
                                <Card.Content style={styles.cardInfo}>
                                    <Icon name="pencil" size={25}></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Petitions</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>...</Text>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <View style={styles.card}>
                            <Card style={styles.test}>
                                <Card.Content style={styles.cardInfo}>
                                    <Icon name="email" size={25}></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Email</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>...</Text>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttons}> 
                        <View style={styles.card}>
                            <Card style={styles.test}>
                                <Card.Content style={styles.cardInfo}>
                                    <Icon name="star" size={25}></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Donation Funds</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>...</Text>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <View style={styles.card}>
                            <Card style={styles.test}>
                                <Card.Content style={styles.cardInfo}>
                                    <Icon name="calendar" size={25}></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Events</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>...</Text>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttons}> 
                        <View style={styles.card}>
                            <Card style={styles.test}>
                                <Card.Content style={styles.cardInfo}>
                                    <Icon name="heart" size={25}></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Volunteer</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>...</Text>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <View style={styles.card}>
                            <Card style={styles.test}>
                                <Card.Content style={styles.cardInfo}>
                                    <Icon name="mail" size={25}></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>Infographics</Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text>...</Text>
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
    buttonContainer: {
      flexDirection: 'row',
      paddingTop: '0%',
    },
    card: {
      alignItems: 'center',  
    },
    buttons: {
      width: '50%',
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
    test: {
      width: '80%',  
    },
    pageContainer: {
      paddingTop: '20%',
    }
  });