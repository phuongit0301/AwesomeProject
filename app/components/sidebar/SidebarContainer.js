import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class SidebarContainer extends Component {
  render() {
    return (
      <View style={styles.navbar}>
        <Text>Navbar</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'red',
    flex: 1
  }
});