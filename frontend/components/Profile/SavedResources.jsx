import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ToggleButton } from 'react-native-paper';
import SavedCards from '../Resource/SavedCards'

export default class SavedResources extends React.Component {
    render () {
        return (
            <ScrollView style={{flex:1}}>
                <SavedCards></SavedCards>
            </ScrollView>

        );
    }
}