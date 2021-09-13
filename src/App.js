import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import './index.scss';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/shared/NavBar'
import Home from './components/shared/Home'
import AutoAlert from './components/shared/AutoAlert/AutoAlert'
// import messages from './components/shared/AutoAlert/messages'
import { Container } from 'semantic-ui-react'
import AuthenticatedRoute from './components/shared/AuthenticatedRoute'

import SignUp from './components/routes/SignUp'
import SignIn from './components/routes/SignIn'
import ChangePass from './components/routes/ChangePass'
import SignOut from './components/routes/SignOut'
import AllCopies from './components/routes/Copies/AllCopies'
import AllTrades from './components/routes/Trades/AllTrades'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: null,
			msgAlerts: []
		}
	}

	setUser = (user) => this.setState({ user })

	clearUser = () => this.setState({ user: null })

	deleteAlert = (id) => {
		this.setState((state) => {
			return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
		})
	}

	msgAlert = ({ heading, msg, variant }) => {
		const id = uuid()
		this.setState((state) => {
			return { msgAlerts: [...state.msgAlerts, { heading, msg, variant, id }] }
		})
	}

	render() {
		const { msgAlerts, user } = this.state
		return (
			<Fragment>
				<NavBar user={user} msgAlert={this.msgAlert} />
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
				<Container>
					<Route
						path='/sign-up'
						render={() => (
							<SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
						)}
					/>
					<Route
						path='/sign-in'
						render={() => (
							<SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
						)}
					/>
					<AuthenticatedRoute
						user={user}
						path='/home'
						render={() => <Home msgAlert={this.msgAlert} user={user} />}
					/>
					<AuthenticatedRoute
						user={user}
						path='/allcopies'
						render={() => <AllCopies msgAlert={this.msgAlert} user={user} />}
					/>
					<AuthenticatedRoute
						user={user}
						path='/alltrades'
						render={() => <AllTrades msgAlert={this.msgAlert} user={user} />}
					/>
					<AuthenticatedRoute
						user={user}
						path='/change-pw'
						render={() => <ChangePass msgAlert={this.msgAlert} user={user} />}
					/>
					<AuthenticatedRoute
						user={user}
						path='/sign-out'
						render={() => (
							<SignOut
								msgAlert={this.msgAlert}
								user={user}
								clearUser={this.clearUser}
							/>
						)}
					/>
				</Container>
			</Fragment>
		)
	}
}

export default App;
