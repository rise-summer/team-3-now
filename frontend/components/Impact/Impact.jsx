import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import {Resource} from '../General/ResourceButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Title } from 'react-native-paper';

const image = { uri: "https://cdn.cnn.com/cnnnext/dam/assets/200622104651-black-lives-matter-support-impact-0613-exlarge-169.jpg"};

const ImpactPage =({navigation}) => {
  return (
      <View style={styles.body}>
          <View style={styles.header}>
            <ImageBackground source={image} style={styles.image} >
              <View style={styles.overlay}>
                <Text></Text>
                <Text style= {styles.headerHashtag}> Black Lives Matter </Text>
                <Text style= {styles.text}>How You Can Help</Text>
                <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                    <Resource></Resource>
                </View>
              </View>
            </ImageBackground> 
          </View>  

          <View style={styles.container}>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea} onPress={()=> navigation.navigate('ResourcePage')}  > 
                        <View style={styles.cardView}>
                            <Card style={styles.cardsGreen}>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Icon name="pencil" size={36} color="#049F76"></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                    <Text></Text>
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
                                    <Icon name="email" size={36} color='#8390FA'></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                <Text></Text>
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
                                    <Icon name="star" size={36} color='#8390FA'></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                <Text></Text>
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
                                    <Icon name="calendar" size={36} color="#049F76"></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                <Text></Text>
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
                                    <Icon name="heart" size={36} color="#049F76"></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                <Text></Text>
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
                                    <Icon name="newspaper" size={36} color='#8390FA'></Icon>
                                </Card.Content>
                                <Card.Content style={styles.cardInfo}>
                                <Text></Text>
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



        
        {/* <View style={styles.cards}>
          <Cards></Cards>
        </View> */}


      </View>
      
  );
}

export default ImpactPage;


const styles = StyleSheet.create({
    body: {
      flex:1,
      paddingTop: '0%',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    overlay: {
      backgroundColor:'rgba(2,2,2,0.6)',
      height: 180,
    },
    image: {
      width: '100%',
      height: 180,
    },
    header: {
      width: 400,
      paddingTop: '0%',
      paddingLeft: '0%',
      alignItems: 'center',
    },
    text: {
      textAlign:'center',
      paddingTop:'1%',
      paddingBottom:'3%', 
      fontSize: 18,
      color: 'white',
    },
    filler: {
      fontSize: 450
    },

    headerHashtag: {
      textAlign:'center',  
      justifyContent: 'center',
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
    },
        
    cards: {
      paddingTop: '0%',
    },
    cardContainer: {
      flexDirection: 'row',
      paddingTop: '0%',
    },
    cardView: {
      alignItems: 'center', 
    },
    touchArea: {
      width: '50%',
      paddingTop: '4%',
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
      width: '90%', 
      borderWidth: 2,
      borderColor: "#049F76",
    },
    cardsBlue: {
      width: '90%', 
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
        color: "#049F76",
    }

  });