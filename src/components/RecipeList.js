import React, { Component } from 'react';
import {
  Dimensions, StyleSheet, View, Text, Image, ScrollView, 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    wholeList:{
        height:100,
        width:width,
        backgroundColor:"white",
    }
})

class RecipeList extends Component {
    state = {
        recipes:""
    }

  render() {
    return (
      <View style={styles.wholeList}>
          <Text>Aqui va la lista de recetas</Text>
      </View>
    );
  }
}

export default RecipeList;
