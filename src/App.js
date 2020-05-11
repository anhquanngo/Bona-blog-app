import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
import Category from './Component/Category';
import single_post_1 from './Component/single-post-1';
import { Provider } from "react-redux"
import store from "./Setup_Store/Store";

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/categories" component={Category} />
            <Route path="/single-post-1" component={single_post_1} />
          </Switch>
          <Footer />
        </BrowserRouter >
      </Provider>
    );
  }
}

export default App;
