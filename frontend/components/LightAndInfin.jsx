import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ToggleButton } from 'react-native-paper';
import Lightning from './Lightning'
import Infinity from './Infinity'

export default class LightAndInfin extends React.Component {

    constructor(props) {
      super(props);
      this.state = { light: 'checked', infin: 'unchecked', isLight: true }; 
    }
    
    onPress = (lightStatus, infinStatus, page) => {
      this.setState({
        light: lightStatus,
        infin: infinStatus,
        isLight: page
      });
    }

    render () {
      if (this.state.isLight) {
        return (
          <View style={styles.container}>
            <View style = {styles.buttonContainer}>
              <View style={styles.buttons}>
                <View style={styles.icon}>
                  <ToggleButton
                    icon="flash"
                    value="light"
                    size={30}
                    status={this.state.light}
                    onPress={()=>this.onPress('checked', 'unchecked', true)}
                  />
                </View>
              </View>
              <View style={styles.buttons}>
                <View style={styles.icon}>
                <ToggleButton
                    icon="infinity"
                    value="infin"
                    size={30}
                    status={this.state.infin}
                    onPress={()=>this.onPress('unchecked', 'checked', false)}
                  />
                </View>
              </View>
            </View>
            <View style = {styles.pageContainer}>
              <Lightning></Lightning>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <View style = {styles.buttonContainer}>
              <View style={styles.buttons}>
                <View style={styles.icon}>
                  <ToggleButton
                    icon="flash"
                    value="light"
                    size={30}
                    status={this.state.status}
                    onPress={()=>this.onPress('checked', 'unchecked', true)}
                  />
                </View>
              </View>
              <View style={styles.buttons}>
                <View style={styles.icon}>
                <ToggleButton
                    icon="infinity"
                    value="infin"
                    size={30}
                    status={this.state.status2}
                    onPress={()=>this.onPress('unchecked', 'checked', false)}
                  />
                </View>
              </View>
            </View>
            <View style = {styles.pageContainer}>
              <Infinity></Infinity>
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
    },
    icon: {
      alignItems: 'center',  
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
      paddingTop: '20%',
    }
  });