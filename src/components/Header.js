import React from 'react';
import {
  View, StyleSheet, TouchableWithoutFeedback, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#00BDCB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    elevation: 2,
    shadowColor: 'black',
  },
  logo: {
    height: 40,
    width: 30,
  },
  searchBar: {
    paddingHorizontal: 15,
  },
});

const Header = props => (

  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={() => props.toggle()}>
      <Icon style={styles.searchBar} name="bars" color="white" size={40} />
    </TouchableWithoutFeedback>
    <Image style={styles.logo} source={require('../images/fridge.png')} />
    <Icon name="search" color="white" size={40} />
  </View>
);

export default Header;
