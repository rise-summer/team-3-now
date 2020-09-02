import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SavedArticles from './SavedArticles';
import SavedResources from './SavedResources';

export default class Saved extends React.Component {

    constructor(props) {
      super(props);
      this.state = {isA: true }; 
    }
    
    onPress = (page) => {
      this.setState({
        isA: page
      });
    }

    render () {
      if (this.state.isA) {
        return (
          <View style={styles.container}>
            <View style = {styles.buttonContainer}>
              <View style={styles.buttons}>
                <View style={styles.pageSelected}>
                  <TouchableOpacity
                    onPress={()=>this.onPress(true)}
                    style = {styles.lightStyle}
                  >
                      <Text style={styles.greenText}> Saved Articles </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.buttons}>
                <View style={styles.page}>
                    <TouchableOpacity
                     onPress={()=>this.onPress(false)}
                    >
                        <Text style={styles.grayText}> Saved Resources </Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style = {styles.pageContainer}>
              
              <SavedArticles></SavedArticles> 
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <View style = {styles.buttonContainer}>
              <View style={styles.buttons}>
                <View style={styles.page}>
                    <TouchableOpacity
                      onPress={()=>this.onPress(true)}
                    >
                        <Text style={styles.grayText}> Saved Articles </Text>
                    </TouchableOpacity>
                </View>
              </View>
              <View style={styles.buttons}>
                <View style={styles.pageSelected}>
                    <TouchableOpacity
                      onPress={()=>this.onPress(false)}
                      style = {styles.infinStyle}
                    >
                        <Text style={styles.greenText}> Saved Resources </Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style = {styles.pageContainer}>
              <SavedResources></SavedResources>
            </View>
          </View>
        );
      }
   }
}

const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      paddingTop: '0%',
      height: '10%',
    },
    page: {
      alignItems: 'center',
      borderBottomColor: 'gray',
      borderBottomWidth: 1,  
      height: '100%',
    },
    pageSelected: {
      alignItems: 'center',
      borderBottomColor:"#4C00C9",
      borderBottomWidth: 1, 
      height: '100%', 
    },
    buttons: {
      backgroundColor: 'white',
      width: '50%',
    },
    container: {
      flex: 2,
      alignItems: 'center',  
    },
    pageContainer: {
      paddingTop: '0%',
    },
    lightStyle: {
      width: '100%',
      alignItems: 'center',
    },
    infinStyle: {
      width: '100%',
      alignItems: 'center',
    },
    grayText: {
        color: 'grey',
        fontSize: 16,

    },
    greenText: {
        color: "#4C00C9",
        fontSize: 16,
        
    }
  });