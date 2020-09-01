import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Text} from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 



// TO DO: Add onPress events to navigate to respective pages for each card 

export default class MyList extends React.Component{
    
    onPress = () => {
    }

    render () {
        return (
            <View style={styles.container}>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                                <Card.Title title = "BLACK LIVES MATTER"/>
                                <Card>
                                    <Card.Cover source={{ uri: 'https://news.cgtn.com/news/2020-05-31/Thousands-rally-in-Toronto-as-police-probe-Korchinski-Paquet-s-death--QWE3JcrPig/img/dddc7a4d81b1410f8a7aabffec98efcf/dddc7a4d81b1410f8a7aabffec98efcf.png' }} />
                                </Card>
                                <Card.Content style={styles.cardInfo}>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                                <Card.Title title = "2020 US ELECTIONS"/>
                                <Card>
                                    <Card.Cover source={{ uri: 'https://ichef.bbci.co.uk/news/410/cpsprodpb/9665/production/_113810583_index_promo_poll_tracker_bw_976.png' }} />
                                </Card>
                                <Card.Content style={styles.cardInfo}>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                                <Card.Title title = "FREE PALESTINE"/>
                                <Card>
                                    <Card.Cover source={{ uri: 'https://www.middleeasteye.net/sites/default/files/styles/article_page/public/images-story/palestine_jerusalem_aqsa_afp_31519.jpg?itok=oQCdFq8D' }} />
                                </Card>
                                <Card.Content style={styles.cardInfo}>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                                <Card.Title title = "Beirut Explosion"/>
                                <Card>
                                    <Card.Cover source={{ uri: 'https://www.ecuavisa.com/sites/default/files/fotos/2020/08/07/libano_beirut_explosion_0.jpg' }} />
                                </Card>
                                <Card.Content style={styles.cardInfo}>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                                <Card.Title title = "Junk Terror Bill"/>
                                <Card>
                                    <Card.Cover source={{ uri: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7BFP2TFGNQI6VCMOWINZVA7XSI.jpg' }} />
                                </Card>
                                <Card.Content style={styles.cardInfo}>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                                <Card.Title title = "COVID-19 SSCHOOL REOPENING"/>
                                <Card>
                                    <Card.Cover source={{ uri: 'https://aarjb2jw4n53e35fhbquj418-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/child-with-face-mask-back-at-school-after-covid-19-JNMLF65.jpg' }} />
                                </Card>
                                <Card.Content style={styles.cardInfo}>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                                <Card.Title title = "YEMEN CRISIS"/>
                                <Card>
                                    <Card.Cover source={{ uri: 'https://www.unocha.org/sites/unocha/files/OCHA_Category/Top_Stories/yemenphotos_0.JPG' }} />
                                </Card>
                                <Card.Content style={styles.cardInfo}>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                                <Card.Title title = "MURDER OF HACALUU HUNDESA"/>
                                <Card>
                                    <Card.Cover source={{ uri: 'https://www.aljazeera.com/mritems/Images/2020/7/5/048db0ba6da546a1979c903a6ee1795f_18.jpg' }} />
                                </Card>
                                <Card.Content style={styles.cardInfo}>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                                <Card.Title title = "CALIFORNIA WILDFIRES"/>
                                <Card>
                                    <Card.Cover source={{ uri: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CAYGKTXENAI6VAWYLZK5I7UQZI.jpg&w=916' }} />
                                </Card>
                                <Card.Content style={styles.cardInfo}>
                                </Card.Content>
                            </Card>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.cardContainer}>
                    <TouchableOpacity style={styles.touchArea}> 
                        <View style={styles.cardView}>
                            <Card style={styles.cards}>
                                <Card.Title title = "UYGHUR DETAINEMENT IN CHINA"/>
                                {/*<Card>
                                    <Card.Cover source={{ uri: '' }} />
                                </Card> */}
                                <Card.Content style={styles.cardInfo}>
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
    cardContainer: {
      flexDirection: 'row',
      paddingTop: '0%',
    },
    cardView: {
      alignItems: 'center',  
    },
    touchArea: {
      width: '100%',
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
    cards: {
      width: '82%',  
    },
    pageContainer: {
      paddingTop: '20%',
    }
  });