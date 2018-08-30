/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import SideMenu from 'react-native-side-menu';
import Menu from './components/Menu';
import RecipeList from './components/RecipeList'

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',

  }
})
type Props = {};
export default class App extends Component<Props> {

 constructor(props){
   super(props)
   this.state = {
     isOpen: false
   }
 }
  
  toggle(){
    this.setState({
      isOpen:!this.state.isOpen
    })
  }

  updateMenu(isOpen){
    this.setState({isOpen})
  }

  render() {
    return (
      <SideMenu
      menu={<Menu />}
      isOpen={this.state.isOpen}
      onChange={(isOpen) => this.updateMenu(isOpen)}
      >
      <View style={[{flex:1}, styles.container]}>
      <Header toggle={this.toggle.bind(this)}/>
      <RecipeList />
      </View>
      </SideMenu> 
    )
  }
}

