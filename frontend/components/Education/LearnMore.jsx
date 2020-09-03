import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ToggleButton, Card } from 'react-native-paper';


// Scroll view not working? 

export default class LearnMore extends React.Component {
    render () {
        return (
            <ScrollView style={{flex:1}}>
                <TouchableOpacity>
                <Card style={styles.cardsGreen}>
                    <Card.Cover source={{ uri: 'https://live.staticflickr.com/65535/49984521671_4e9840e68d_b.jpg' }} />
                    <Card.Content style={styles.cardInfo}>
                        <Text style={styles.cardText}> From Social Media to Global Movement</Text>
                    </Card.Content>
                    <Card.Content style={styles.cardInfo}>
                        <Text style={styles.cardText}>Source: BBC</Text>
                    </Card.Content>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity>
                <Card style={styles.cardsGreen}>
                    <Card.Cover source={{ uri: 'https://www.adl.org/sites/default/files/styles/open_graph_image_1200_x_628_/public/images/assets/images-content/education-outreach/curriculum-resources/ferguson-garner-seattle-black-lives-matter-protest-380.jpg?itok=Uc_U9UGl' }} />
                    <Card.Content style={styles.cardInfo}>
                        <Text style={styles.cardText}> BLM: From Hashtag to Movement</Text>
                    </Card.Content>
                    <Card.Content style={styles.cardInfo}>
                        <Text style={styles.cardText}> Source: ADL</Text>
                    </Card.Content>
                </Card>
                </TouchableOpacity>
            </ScrollView>

        );
    }
}

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
