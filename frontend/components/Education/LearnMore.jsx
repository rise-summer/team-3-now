import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import {  Card } from 'react-native-paper';

// Scroll view not working? 

export default class LearnMore extends React.Component {
    render () {
        return (
           
<ScrollView style={styles.scrollView}>
       
        <View style={{width:100}}>    
        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> null}>
            <Card style={styles.cardsGreen}>
              <Card.Title>Activists see progress after George Floyd's death but say more must be done</Card.Title>
              <Card.Cover source={{ uri: 'https://www.ecuavisa.com/sites/default/files/fotos/2020/08/07/libano_beirut_explosion_0.jpg'}} />
              <Card.Content style={styles.cardInfo}>
                
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=>null}>
            <Card style={styles.cardsGreen}>
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
            <Card.Cover source={{ uri: 'https://www.ecuavisa.com/sites/default/files/fotos/2020/08/07/libano_beirut_explosion_0.jpg' }} />
              <Card.Content style={styles.cardInfo}>
               
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> null}>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={{ uri: 'https://www.ecuavisa.com/sites/default/files/fotos/2020/08/07/libano_beirut_explosion_0.jpg' }} />
              <Card.Content style={styles.cardInfo}>
                
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        
        
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