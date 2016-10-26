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
} from 'react-native';

import { Container, Content, Grid, Col, List, ListItem, Button, Icon } from 'native-base';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Text>Navbar</Text>
        </View>

        <View style={styles.main}>
          <Text style={styles.welcome}>
            Main Content
          </Text>
        </View>
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
    flex: 1,
    alignItems: 'flex-start',
  },
  navbar: {
    backgroundColor: 'red',
    flex: 1,
    left: 0
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
