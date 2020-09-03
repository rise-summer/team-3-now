import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import {  Card } from 'react-native-paper';

// Scroll view not working? 

export default class LearnMore extends React.Component {
    render () {
        return (
           
<ScrollView style={styles.scrollView}>
       
       
        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=>null}>
            <Card style={styles.cardsGreen}>
            <Card.Title>Activists see progress after George Floyd's death but say more must be done</Card.Title>
            <Card.Cover source={{ uri: 'https://www.gannett-cdn.com/presto/2020/06/16/USAT/3d6bdf71-183f-48c6-bb2d-5b72d579d333-hiero.floyd.1.jpg?width=660&height=495&fit=crop&format=pjpg&auto=webp'}} />
              <Card.Content style={styles.cardInfo}>
                
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> null}>
            <Card style={styles.cardsGreen}>
            <Card.Title>How Black Lives Matter went from a hashtag to a global rallying cry</Card.Title>
            <Card.Cover source={{ uri:'https://cdn.cnn.com/cnnnext/dam/assets/200611132359-la-black-lives-matter-protest-medium-plus-169.jpg '}} />
              <Card.Content style={styles.cardInfo}>
               
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> null}>
            <Card style={styles.cardsGreen}>
            <Card.Title>Activists see progress after George Floyd's death but say more must be done</Card.Title>
            <Card.Cover source={{ uri: 'https://cdn.cnn.com/cnnnext/dam/assets/200607170022-01-lapd-protesters-george-floyd-super-169.jpg' }} />
              <Card.Content style={styles.cardInfo}>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        

        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> null}>
            <Card style={styles.cardsGreen}>
            <Card.Title>Jacob Blake Paralyzed After Being Shot In The Back By The Police</Card.Title>
            <Card.Cover source={{ uri: 'https://cdn.cnn.com/cnnnext/dam/assets/200626222429-black-lives-matters-mural-atlanta-0619-medium-plus-169.jpg' }} />
              <Card.Content style={styles.cardInfo}>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        
        </ScrollView>


        );
    
    }
}
const styles = StyleSheet.create({
   
    header: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: '5%',
    },
    cardsGreen: {
      width: 100, 
    },
    cards: {
      width: 100, 
      paddingTop: '2%',
    },
    cardInfo: {
      alignItems: 'center',  
    },
    scrollView: {
      width: 100, 
    },
    cardText: {
      fontWeight: 'bold',
      fontSize: 20,
    },
  });