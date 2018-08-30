import React, { Component } from 'react';
import {
  Dimensions, StyleSheet, View, Text, Image, ScrollView, 
} from 'react-native';

const styles = StyleSheet.create({
    listIndividual:{
        height:100,
        width:width,
        backgroundColor:"white",
        
    }
})

class RecipeListComponent extends Component {

  render() {
    return (
      <View style={styles.listIndividual}>
        <View style={styles.recipeImage}>
            <Image src={require('../images/recetaHardcodeada.jpeg')}/>
            <View style={styles.recipeDescription}>
                <Text>Aqui la descripción de la receta</Text>
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
