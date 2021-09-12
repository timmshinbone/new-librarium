import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Label, Input } from 'semantic-ui-react'

import { signIn } from '../../api/auth'
import messages from '../shared/AutoAlert/messages'

class SignIn extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = (event) =>
		this.setState({
			[event.target.name]: event.target.value,
		})

	onSignUp = (event) => {
		event.preventDefault()

		const { msgAlert, history, setUser } = this.props

		signIn(this.state)
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign In Success!',
					msg: messages.signInSuccess,
					variant: 'olive',
				})
			)
			.then(() => history.push('/home'))
			.catch((error) => {
				this.setState({ email: '', password: '' })
				msgAlert({
					heading: 'Sign In Failed with error: ' + error.message,
					msg: messages.signInFailure,
					variant: 'red',
				})
			})
	}

	render() {
		const { email, password } = this.state
		return (
			<Form onSubmit={this.onSignUp}>
				<Form.Field>
					<Label>Email</Label>
					<Input
						name='email'
						type='email'
						value={email}
						placeholder='email'
						onChange={this.handleChange}
					/>
				</Form.Field>
				<Form.Field>
					<Label>Password</Label>
					<Input
						name='password'
						type='password'
						value={password}
						placeholder='password'
						onChange={this.handleChange}
					/>
				</Form.Field>
				<Button color='green' type='submit'>
					Submit
				</Button>
			</Form>
		)
	}
}

export default withRouter(SignIn)
