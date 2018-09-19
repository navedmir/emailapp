import React, { Component } from 'react';
import './App.css';
import FormContainer from './containers/FormContainer';

class Home extends Component {
  render() {
    return (
      <div className="col-md-6">
        <FormContainer />
      </div>
    );
  }
}

export default Home;