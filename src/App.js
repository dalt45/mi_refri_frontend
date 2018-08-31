import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './Home';
import Ingredients from './components/Ingredients';
import AddIngredients from './components/AddIngredients';

export default class App extends Component {
  render() {
    return (

      <Router>
        <Scene key="root">
          <Scene key="recipes" component={Home} initial hideNavBar />
          <Scene key="ingredients" component={Ingredients} hideNavBar />
          <Scene key="addIngredients" component={AddIngredients} />
        </Scene>
      </Router>
    );
  }
}
