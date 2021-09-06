import React, { Component, Fragment } from 'react';
import './index.scss';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/shared/NavBar'

class App extends Component {
  render () {  
    return (
      <Fragment className="App">
        <NavBar />
        <h1>Librarium Body Goes Here</h1>
      </Fragment>
    )
  }
}

export default App;
