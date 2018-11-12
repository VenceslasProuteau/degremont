import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Sidebar from './Sidebar';
import Header from './page-components/header/Header';
import Book from './page-components/book/Book';
import Contact from './page-components/contact/Contact';
import Materials from './page-components/materials/Materials';
import Shop from './page-components/shop/Shop';
import StockList from './page-components/stocklist/StockList';

const routes = [
  {
    path: "/lookbook",
    component: Book
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/materials",
    component: Materials
  },
  {
    path: "/shop",
    component: Shop
  },
  {
    path: "/stocklist",
    component: StockList
  },
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="aside">
            <Header />
            <Sidebar />
          </div>
          <div className="Main">
            {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
