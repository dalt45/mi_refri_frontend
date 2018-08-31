import React, { Component } from 'react';
import {
  Dimensions, StyleSheet, View, Text, Image,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  listIndividual: {
    flex: 1,
    backgroundColor: 'white',
    width,
  },
  recipeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    paddingRight: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    elevation: 2,
    height: 110,
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingTop: 5,
    paddingBottom: 5,
  },
  imageRecipe: {
    width: 100,
    height: 100,
    borderRadius: 200,
  },
  recipeCompatibility: {
    backgroundColor: '#FEEF3D',
    height: 50,
    width: 50,
    borderRadius: 200,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    elevation: 7,
  },
});

class RecipeListComponent extends Component {
  render() {
    return (
      <View style={styles.listIndividual}>
        <View style={styles.recipeContainer}>
          <Image style={styles.imageRecipe} source={require('../images/recetaHardcodeada.jpeg')} />
          <View style={styles.recipeDescription}>
            <Text style={styles.titleRecipe}>Titulo de la receta</Text>
            <Text style={styles.descriptionRecipe}>Aqui la descripción de la receta</Text>
          </View>
          <View style={styles.recipeCompatibility}>
            <Text>100%</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default RecipeListComponent;
