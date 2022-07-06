import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from '../pages/HomePage';

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
      
            <Routes>
                <Route path="/" element={<HomePage />} />
                
            </Routes>
        
      </Fragment>
    )
  }
}

export default AppRoute