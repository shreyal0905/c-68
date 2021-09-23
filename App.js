import React,{ Component } from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import fb from './screens/fb'
import insta from './screens/insta'

export default class App extends Component() {
  render(){
    return(
    <View style={styles.container}>
      <Text>BuzzApp</Text>
      <AppContainer/>
    </View>
    )
    };
}
const TabNavigator = createBottomTabNavigator({
  fb:{screen:fb},
  insta: {screen:insta},
})
const AppContainer = createAppContainer(
  TabNavigator
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
