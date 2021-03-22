import React, { useState } from "react";
import './App.css';
import 'owl.carousel'
import Header from './layout/header';
import Layout from './layout/layout';
import Footer from './layout/footer';
import NavbarSlide from './components/navbar-slide';
import Catolories from './components/catolories';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  
  return (
    <Router>
     <Header/>
     <Layout/>
     <div className="App">
     <NavbarSlide/>
     <Catolories/>
     </div>
     <Switch>
       <Route path='/' />
     </Switch>
     <Footer/>
    </Router>
 );
}
export default App;
