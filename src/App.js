import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Section from './Component/Section';
import Footer from './Component/Footer';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
import Category from './Component/Category';
import single_post_1 from './Component/single-post-1';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Section} />
        <Route path="/categories" component={Category} />
        <Route path="/single-post-1" component={single_post_1} />
      </Switch>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
