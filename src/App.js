import React, { Component, Fragment } from 'react';
import { v4 as uuid } from 'uuid'
import './index.scss';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/shared/NavBar'
import AutoAlert from './components/shared/AutoAlert/AutoAlert'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id)}
    })
  }

  msgAlert = ({ heading, msg, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, msg, variant, id }]}
    })
  }

  render () {  
    const { msgAlerts, user } = this.state
    return (
      <Fragment>
        <NavBar user={user} msgAlert={this.msgAlert}/>
        <h1>Librarium Body Goes Here</h1>
        {msgAlerts.map((msgAlert) => (
          <AutoAlert 
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            msg={msgAlert.msg}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
      </Fragment>
    )
  }
}

export default App;
