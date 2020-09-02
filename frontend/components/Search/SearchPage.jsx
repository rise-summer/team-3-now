import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';


import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'


export default function Search ({navigation}) {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
      <View style={styles.container}>
        <Searchbar
          placeholder="Search..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style= {styles.bar}
          iconColor= "white"
        />

      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.header}> Top 10 Trending Issues</Text>
        <View style={styles.cards}>
          <TouchableOpacity onPress={() => navigation.navigate('Education')}>
            <Card style={styles.cardsGreen}>
              <Card.Cover source={ img1 } />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={img2} />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
              <Card.Cover source={ img3 } />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={img2} />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
              <Card.Cover source={ img1 } />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={img2} />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity onPress={() => navigation.navigate('Education')}>
            <Card style={styles.cardsGreen}>
              <Card.Cover source={ img1 } />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={img2} />
            </Card>
          </TouchableOpacity>
        </View>

        </ScrollView>
      </View>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start',
    marginTop: 2,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: '5%',
    paddingHorizontal: '17%'
  },
  cardsGreen: {
    width: '100%', 
  },
  cards: {
    width: '100%', 
    paddingTop: '2%',
  },
  cardInfo: {
    alignItems: 'center',  
  },
  scrollView: {
    flex: 1, 
    width: '90%', 
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  bar: {
    backgroundColor: "#8390FA",
    color: 'white',
    textDecorationColor: "white"
  },
});