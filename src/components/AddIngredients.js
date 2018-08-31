import React, { Component } from 'react';
import {
  Text, View,
} from 'react-native';
import IngredientList from './IngredientList';

class AddIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>Lista de Ingredientes</Text>
        <View>
        <IngredientList />
        </View>
      </View>
    );
  }
}

export default AddIngredients;
