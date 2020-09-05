import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';
import {CauseProvider, CauseContext,CauseDispatchContext} from '../CauseContext';


import img1 from './CoverPics/img1.png'
import img2 from './CoverPics/img2.png'
import img3 from './CoverPics/img10.png'
import img4 from './CoverPics/img4.png'
import img5 from './CoverPics/img5.png'
import img6 from './CoverPics/img6.png'
import img7 from './CoverPics/img7.png'
import img8 from './CoverPics/img8.png'
import img9 from './CoverPics/img9.png'
import img10 from './CoverPics/img3.png'



export default function Search ({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  // const CauseDetails = useContext(CauseContext);


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
          <TouchableOpacity >
            <Card style={styles.cardsGreen}>
              <Card.Cover source={ img1 } />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity onPress={()=> navigation.navigate('Education')}>
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
            <Card.Cover source={img4} />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
              <Card.Cover source={ img5 } />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={img6} />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
              <Card.Cover source={ img7 } />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={img8} />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={img9} />
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={img10} />
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