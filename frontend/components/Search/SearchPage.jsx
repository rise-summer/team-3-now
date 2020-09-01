import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';



export default function Search ({navigation}) {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
      <View style={styles.container}>
        <Searchbar
          placeholder="Search causes/issues"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <ScrollView style={styles.scrollView}>
        <Text style={styles.header}> Top 10 Trending Issues</Text>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
              <Card.Cover source={{ uri: 'https://ewscripps.brightspotcdn.com/dims4/default/4e2794b/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fc2%2Fb2%2Fe7083f0b4c878daba93a4067d483%2Fcoronavirus-background-1280x720.jpg' }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}> 1. COVID-19</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={{ uri: 'https://cdn.cnn.com/cnnnext/dam/assets/200622104651-black-lives-matter-support-impact-0613-exlarge-169.jpg' }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}> 2. Black Lives Matter</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={{ uri: 'https://ichef.bbci.co.uk/news/624/cpsprodpb/10243/production/_113951166_index_promo_simple_guide_976_v2.png' }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}> 3. 2020 Election</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={{ uri: 'https://static.babyandchild.ae/imgs/1703_Back_to_school_inset2_SHU-xlarge.jpg' }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}> 4. Schools Reopening</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <Button
          title="Click Here to go to Education page"
          onPress={() => navigation.navigate('Education')}
          style={styles.education}
        />
        </ScrollView>
      </View>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: '5%',
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
    width: '100%', 
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});