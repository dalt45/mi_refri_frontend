import React, { Component } from 'react';
import {
  Dimensions, StyleSheet, View, Text, Image, ScrollView, 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    text:{
        fontSize:24,
        color:'white',
    },
    menuView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 2 + 59,
        borderColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    withIcon:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    menu:{
        flex: 1,
        width: width,
        height: height,
        backgroundColor:"#00BDCB"
    },
    textWithIcon:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: '#000',
        borderBottomWidth: 3,
    },
    scrollContainer: {
        width: width / 2 + 59
    },
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20
    },
    rightIcon: {
        paddingRight: 20
    },
})

class Menu extends Component {
  render() {
    return (
      <View style={styles.menu}>
          <View style={styles.menuView}>
              <Text style={styles.text}>My Refri Aplicacion</Text>
          </View>
          <ScrollView style={styles.scrollContainer}>
              <View style={styles.textWithIcon}>
              <View style={styles.withIcon}>
              <Icon style= {styles.iconWithText}name="apple" color="white" size={28}/>
                  <Text style={styles.text}> Recetas</Text>
              </View>
                <Icon style ={styles.rightIcon} name={"angle-right"} color="white" size={25}/>
              </View>
              <View style={styles.textWithIcon}>
              <View style={styles.withIcon}>
              <Icon style= {styles.iconWithText}name="apple" color="white" size={28}/>
                  <Text style={styles.text}> Ingredientes</Text>
              </View>
                <Icon style ={styles.rightIcon} name={"angle-right"} color="white" size={25}/>
              </View>
          </ScrollView>
      </View>
    );
  }
}

export default Menu;
