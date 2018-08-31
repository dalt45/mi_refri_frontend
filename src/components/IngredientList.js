import React, { Component } from 'react';
import {
  Dimensions, StyleSheet, View, Text, Image, ScrollView,
} from 'react-native';
import IngredientSingle from './IngredientSingle';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  wholeList: {
    height: 100,
    width,
    backgroundColor: 'white',
  },
});

class IngredientList extends Component {
  render() {
    return (
      <IngredientSingle />
    );
  }
}

export default IngredientList;