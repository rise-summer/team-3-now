import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import {  Card } from 'react-native-paper';

// Scroll view not working? 

export default class LearnMore extends React.Component {
    render () {
        return (

            <View style={styles.container}>
                 <ScrollView style={styles.scrollView}>
            
                    <View style={styles.cards}>
                    <TouchableOpacity>
                        <Card style={styles.cardsGreen}>
                            <Card.Cover source={{ uri: 'https://www.nationalgeographic.com/content/dam/science/2019/10/31/california-wildfires/california-fires-ash-air-pollution.adapt.1900.1.jpg'}} />
                            <Card.Content style={styles.cardInfo}>
                                <Text style={styles.cardText}>Wildfires Pose New Threats As Homes Burn, Releasing Toxic Fumes. Source: Natural Geographic</Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.cards}>
                    <TouchableOpacity
                        onPress={()=> null}>
                        <Card style={styles.cardsGreen}>
                        <Card.Cover source={{ uri:'https://i.insider.com/5dbb34cbe0ee7e349d136df9?width=1620'}} />
                        <Card.Content style={styles.cardInfo}>
                        <Text style={styles.cardText}>All Of The Important Dates You Need To Know For The 2020 Presidential Election. Source: Business Insider</Text>
                        </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.cards}>
                    <TouchableOpacity
                        onPress={()=> null}>
                        <Card style={styles.cardsGreen}>
                        <Card.Cover source={{ uri: 'https://media.npr.org/assets/img/2020/07/20/gettyimages-1224649903-94d02251f654005c98355c748fe319ed62da7120-s1500-c85.jpg'}} />
                        <Card.Content style={styles.cardInfo}>
                            <Text style={styles.cardText}>Why Rights Groups Worry About The Philippines' New Anti-Terrorism Law. Source: NPR</Text>
                        </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    </View>
                    

                    <View style={styles.cards}>
                    <TouchableOpacity
                        onPress={()=> null}>
                        <Card style={styles.cardsGreen}>
                        <Card.Cover source={{ uri: 'https://static01.nyt.com/images/2020/08/13/us/opinion-school-reopenings-promo-1597374442567/opinion-school-reopenings-promo-1597374442567-superJumbo-v5.jpg?quality=90&auto=webp' }} />
                        <Card.Content style={styles.cardInfo}>
                            <Text style={styles.cardText}>Schools Briefing: The State of Play for K-12. Source: New York Times</Text>
                        </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    </View>

                </ScrollView>


            </View>
           
       

        );
    
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 420,
        alignItems: 'center'


    },
    header: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: '0%',
    },
    cardsGreen: {
      width: 400, 
      borderColor: "black",
      height: 240
    },
    cards: {
      width: 400, 
      paddingTop: '2%',
      borderColor: "black"
    },
    cardInfo: {
      alignItems: 'center',  
    },
    scrollView: {
      width: 400, 
      flex: 1

    },
    cardText: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 14,
      },
  });