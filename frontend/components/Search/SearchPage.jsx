import React , {useContext}from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';

import {CauseProvider, CauseContext,CauseDispatchContext} from '../CauseContext';

export default function Search ({navigation}) {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const CauseDetails = useContext(CauseContext);
    
   

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
          <TouchableOpacity
            onPress={()=> navigation.navigate('Education',{causeNum:"cause1"})}>
            <Card style={styles.cardsGreen}>
              <Card.Cover source={{ uri: CauseDetails.cause1.imgURL }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}> 1. COVID-19</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Education',{causeNum:"cause2"})}>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={{ uri: CauseDetails.cause2.imgURL }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}> 2. Black Lives Matter</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Education',{causeNum:"cause3"})}>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={{ uri: CauseDetails.cause3.imgURL }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}> 3. 2020 US Election</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Education',{causeNum:"cause4"})}>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={{ uri: CauseDetails.cause4.imgURL }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}> 4. Schools Reopening</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        
        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Education',{causeNum:"cause5"})}>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={{ uri: CauseDetails.cause5.imgURL }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}>5. Free Palestine Movement</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Education',{causeNum:"cause6"})}>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={{ uri: CauseDetails.cause6.imgURL }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}>6. Beirut, Lebanon Explosion</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
                <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Education',{causeNum:"cause7"})}>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={{ uri: CauseDetails.cause7.imgURL }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}>7. Junk Terror Bill-Philippines</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
                <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Education',{causeNum:"cause8"})}>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={{ uri: CauseDetails.cause8.imgURL }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}>8. Yemen Resource Crisis</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Education',{causeNum:"cause9"})}>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={{ uri: CauseDetails.cause9.imgURL }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}>9. The Murder of Hacaluu Hundesa - Ethiopia</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Education',{causeNum:"cause10"})}>
            <Card style={styles.cardsGreen}>
            <Card.Cover source={{ uri: CauseDetails.cause10.imgURL }} />
              <Card.Content style={styles.cardInfo}>
                <Text style={styles.cardText}>10. California Wildfires</Text>
              </Card.Content>
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