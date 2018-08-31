import React, { Component } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';
import Header from './Header';
import Menu from './Menu';
import IngredientList from './IngredientList';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

  },
});

class Ingredients extends Component {
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
          <IngredientList />
          <ActionButton onPress={Actions.addIngredients} />
        </View>
      </SideMenu>
    );
  }
}

export default Ingredients;
