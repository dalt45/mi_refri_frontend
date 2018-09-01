import React, { Component } from 'react';
import {
  Dimensions, StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'black',
  },
  menuView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width,
    borderColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 60,
    shadowColor: 'black',
  },
  withIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menu: {
    flex: 1,
    width,
    height,
    backgroundColor: '#00BDCB',
  },
  textWithIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderColor: '#DAD8DC',
    borderBottomWidth: 0.5,
    backgroundColor: '#F8F8F8',
  },
  scrollContainer: {
    width,
    backgroundColor: 'white',
  },
  iconWithText: {
    marginRight: 10,
    paddingLeft: 20,
  },
  rightIcon: {
    paddingRight: 20,
  },
});


class Menu extends Component {

  constructor(props) {
    super(props);
    this.state={
      isOnRecipes:true,
    }
  }

  handleRecipesShow = () => {
    this.setState({
      isOnRecipes: false,
    });
    return this.state.isOnRecipes
  }

  fun = () => {
    this.handleRecipesShow();
    console.log(this.state);
    this.props.toggle();
  }

  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.menuView}>
          <Text style={styles.text}>My Refri Aplicacion</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.textWithIcon}>
            <View style={styles.withIcon}>
              <Icon style={styles.iconWithText} name="apple" color="black" size={28} />
              <TouchableWithoutFeedback onPress={this.fun}>
                <View>
                  <Text style={styles.text}> Recetas</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <Icon style={styles.rightIcon} name="angle-right" color="black" size={25} />
          </View>
          <View style={styles.textWithIcon}>
            <View style={styles.withIcon}>
              <Icon style={styles.iconWithText} name="apple" color="black" size={28} />
              <Text style={styles.text} onPress={Actions.ingredients}> Ingredientes</Text>
            </View>
            <Icon style={styles.rightIcon} name="angle-right" color="black" size={25} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Menu;
