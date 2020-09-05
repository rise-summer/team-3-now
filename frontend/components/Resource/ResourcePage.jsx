import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import PetitionCards from './PetitionCards'
import {Resource} from '../General/ResourceButton';


const image = { uri: "https://news.cgtn.com/news/2020-05-31/Thousands-rally-in-Toronto-as-police-probe-Korchinski-Paquet-s-death--QWE3JcrPig/img/dddc7a4d81b1410f8a7aabffec98efcf/dddc7a4d81b1410f8a7aabffec98efcf.png"};
const ResourcePage =({navigation}) => {
  return (
    <View style={styles.body}>
    <View style={styles.header}>
      <ImageBackground source={image} style={styles.image} >
        <View style={styles.overlay}>
          <Text></Text>
          <Text style= {styles.headerHashtag}> Black Lives Matter </Text>
          <Text style= {styles.text}>Resources</Text>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <Resource></Resource>
          </View>
        </View>
      </ImageBackground> 
    </View>  

    <View style={styles.cards}>
      <PetitionCards></PetitionCards>
    </View>
    <Text style={styles.filler}></Text>
   
    

</View>

);
}

export default ResourcePage;

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
*/


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
    width: 420,
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
    icon: {
      paddingTop: '18%',
      position:'absolute',
      left: 16,
    }
  });