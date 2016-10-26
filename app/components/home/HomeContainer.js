import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

export default class HomeContainer extends Component {
  render() {
    return (
      <View style={styles.main}>
        <TextInput style={{height: 40}} placeholder='Search...' onChangeText={(text) => this.setState({text})} />
        <Text>
          test
        </Text>
      </View>
    );
  }
  goToSidebar = () => {
    this.prop.navigator.push({
      name: 'Sidebar',
      title: 'Sidebar'
    });
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#CCC',
    flex: 1
  }
});