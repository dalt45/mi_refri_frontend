import React, { Component } from 'react';
import {
  Dimensions, StyleSheet, View, Text, Image,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  listIndividual: {
    flex: 1,
    backgroundColor: 'white',
    width: width / 3,
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 200,
    backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    elevation: 7,
  },
  removeButton: {
    width: 30,
    height: 30,
    borderRadius: 200,
    backgroundColor: 'green',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    elevation: 7,
  },
  editIngredientsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  ingredientName: {
    alignItems: 'center',
  },
  ingredientImg: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    alignItems: 'center',
  },
});

class IngredientSingle extends Component {
  render() {
    return (
      <View style={styles.listIndividual}>
        <View style={styles.ingredientName}>
          <Text>Ingrediente</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.ingredientImg} source={require('../images/banana.jpg')} />
        </View>
        <View style={styles.editIngredientsContainer}>
          <View style={styles.addButton}>
            <Text>+</Text>
          </View>
          <Text>0</Text>
          <View style={styles.removeButton}>
            <Text>-</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default IngredientSingle;
