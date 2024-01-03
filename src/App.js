import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/Sports" element={<News key="Sports" pageSize={6} category="Sports"/>}/>
            <Route exact path="/Business" element={<News key="Business" pageSize={6} category="Business"/>}/>
            <Route exact path="/Health" element={<News key="Health" pageSize={6} category="Health"/>}/>
            <Route exact path="/Technology" element={<News key="Technology" pageSize={6} category="Technology"/>}/>
            <Route exact path="/General" element={<News key="General" pageSize={6} category="General"/>}/>
            <Route exact path="/" element={<News key="General" pageSize={6} category="General"/>}/>
            <Route exact path="/Science" element={<News key="Science" pageSize={6} category="Science"/>}/>
          </Routes>
          
        </Router>
      </>
    )
  }
}
