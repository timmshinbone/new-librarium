import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Message, Container } from 'semantic-ui-react'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoAlert/messages'

class SignOut extends Component {

	onSignOut = (event) => {
		event.preventDefault()

		const { msgAlert, history, clearUser, user } = this.props

		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Sign Out Success!',
					msg: messages.signOutSuccess,
					variant: 'olive',
				})
			)
			.finally(() => history.push('/'))
			.finally(() => clearUser())
	}

	render() {
		return (
			<Container>
				<Form onSubmit={this.onSignOut}>
					<Message
						color='red'
						header='Are you sure you would like to sign out?'
						content='We hate to see you go...'
					/>
					<Button color='red' type='submit'>
						Submit
					</Button>
				</Form>
				<Button basic as='a' href='#'>
					Cancel
				</Button>
			</Container>
		)
	}
}

export default withRouter(SignOut)
