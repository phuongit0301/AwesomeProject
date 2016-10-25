/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
  
  generateAuthorization() {
      return fetch("https://ottapi.com/v1.7/sbtn/index/generateauthorization?key=0tt@pi.C0m_Med1@&token=cab9f50230778df5c52b4ccb4d12d6ca", { method: "GET" })
            .then((response) => response.json())
            .then((responseJson) => {
              return JSON.stringify(responseJson);
            })
            .catch((error) => {
              console.error(error);
            });
  }
  
  componentWillMount() {
    
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
