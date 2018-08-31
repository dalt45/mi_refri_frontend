/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Header from './components/Header';
import Menu from './components/Menu';
import RecipeList from './components/RecipeList';


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenu(isOpen) {
    this.setState({ isOpen });
  }

  render() {
    return (
      <SideMenu
        menu={<Menu toggle={this.toggle.bind(this)} />}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenu(isOpen)}
      >
        <View style={[{ flex: 1 }, styles.container]}>
          <Header toggle={this.toggle.bind(this)} />
          <RecipeList />
        </View>
      </SideMenu>
    );
  }
}

export default Home;
