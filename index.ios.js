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
  AlertIOS,
  Navigator,
  TouchableHighlight,
  TextInput
} from 'react-native';

import { Container, Content, Grid, Col, List, ListItem, Button, Icon } from 'native-base';

import Main from './app/components/Main';

class AwesomeProject extends Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 50
  },
  main: {
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  navbar: {
    backgroundColor: 'red',
    flex: 1
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
