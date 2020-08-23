import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Overview from './Overview';
import LearnMore from './LearnMore';

export default class LightAndInfin extends React.Component {

    constructor(props) {
      super(props);
      this.state = {isLight: true }; 
    }
    
    onPress = (page) => {
      this.setState({
        isLight: page
      });
    }

    render () {
      if (this.state.isLight) {
        return (
          <View style={styles.container}>
            <View style = {styles.buttonContainer}>
              <View style={styles.buttons}>
                <View style={styles.pageSelected}>
                  <TouchableOpacity
                    onPress={()=>this.onPress(true)}
                    style = {styles.lightStyle}
                  >
                      <Text style={styles.greenText}> Overview </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.buttons}>
                <View style={styles.page}>
                    <TouchableOpacity
                     onPress={()=>this.onPress(false)}
                    >
                        <Text style={styles.grayText}> Learn More </Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style = {styles.pageContainer}>
              
              <Overview></Overview> 
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
                        <Text style={styles.grayText}> Overview </Text>
                    </TouchableOpacity>
                </View>
              </View>
              <View style={styles.buttons}>
                <View style={styles.pageSelected}>
                    <TouchableOpacity
                      onPress={()=>this.onPress(false)}
                      style = {styles.infinStyle}
                    >
                        <Text style={styles.greenText}> Learn More </Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style = {styles.pageContainer}>
              <LearnMore></LearnMore>
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
      height: '70%',
    },
    pageSelected: {
      alignItems: 'center',
      borderBottomColor: '#3ECCBB',
      borderBottomWidth: 1, 
      height: '70%', 
    },
    buttons: {
      backgroundColor: 'white',
      width: '50%',
    },
    container: {
      flex: 1,
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
        fontWeight: 'bold',
    },
    greenText: {
        color: '#3ECCBB',
        fontWeight: 'bold',
    }
  });