import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
 
import Home from './screens/home';
import Restaurants from './screens/restaurants';
import ShowRestaurant from './screens/show_restaurant';
import history from './history';
 
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Home}  />
      <Route exact path='/restaurants' component={Restaurants} />
      <Route exact path='/restaurants/:id' component={ShowRestaurant} />
    </Switch>
  </Router>
)
 
export default Routes;