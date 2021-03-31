import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import AddProduct from './Component/AddProduct/AddProduct';
import NotFound from './Component/NotFound/NotFound';
import Login from './Component/Login/Login';
import PrivetRoute from './Component/PrivetRoute/PrivetRoute';
import Checkout from './Component/Checkout/Checkout';
import Order from './Component/Order/Order';


export const UserContext = createContext({});



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>

            <PrivetRoute path='/addProduct'>
              <AddProduct></AddProduct>
            </PrivetRoute>
            <PrivetRoute path='/checkout/:_id'>
              <Checkout></Checkout>
            </PrivetRoute>
            <PrivetRoute path='/order'>
              <Order></Order>
            </PrivetRoute>
            

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
