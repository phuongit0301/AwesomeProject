import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity
} from 'react-native';

import HomeContainer from './home/HomeContainer';
import SidebarContainer from './sidebar/SidebarContainer';

export default class Main extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{ name: 'Home', title: 'Home' }}
        renderScene = { this.renderScene }
        navigationBar = {
          <Navigator.NavigationBar
              routeMapper = { NavigationBarRouteMapper } />
        }
      />
    );
  }
  
  renderScene(route, navigator) {
    if(route.name == 'Home') {
      return ( <HomeContainer navigator = { navigator } { ...route.passProps } /> );
    }
    if(route.name == 'Sidebar') {
      return ( <SidebarContainer navigator = { navigator } { ...route.passProps } />);
    }
  }
}

 var NavigationBarRouteMapper = {
      LeftButton(route, navigator, index, navState) {
        return (
          <TouchableOpacity>
            <Text>Sidebar</Text>
          </TouchableOpacity>
        );
      },
      RightButton(route, navigator, index, navState) {
        return (
          <TouchableOpacity>
            <Text>Search</Text>
          </TouchableOpacity>
        );
      },
      Title(route, navigator, index, navState) {
        return (
          <TouchableOpacity>
            <Text>Logo</Text>
          </TouchableOpacity>
        )
      }
  }