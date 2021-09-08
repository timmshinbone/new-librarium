import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Label, Input } from 'semantic-ui-react'

import { changePassword } from '../../api/auth'
import messages from '../shared/AutoAlert/messages'

class ChangePassword extends Component {
	constructor(props) {
		super(props)

		this.state = {
			oldPassword: '',
			newPassword: '',
		}
	}

	handleChange = (event) =>
		this.setState({
			[event.target.name]: event.target.value,
		})

	onChangePassword = (event) => {
		event.preventDefault()

		const { msgAlert, history, user } = this.props

		changePassword(this.state, user)
			.then(() =>
				msgAlert({
					heading: 'Change Password Success!',
					msg: messages.changePasswordSuccess,
					variant: 'olive',
				})
			)
			.then(() => history.push('/'))
			.catch((error) => {
				this.setState({ oldPassword: '', newPassword: '' })
				msgAlert({
					heading: 'Change Password Failed with error: ' + error.message,
					msg: messages.changePasswordFailure,
					variant: 'red',
				})
			})
	}

	render() {
		const { oldPassword, newPassword } = this.state
		return (
			<Form onSubmit={this.onChangePassword}>
				<Form.Field>
					<Label>Email</Label>
					<Input
						name='oldPassword'
						type='password'
						value={oldPassword}
						placeholder='old password'
						onChange={this.handleChange}
					/>
				</Form.Field>
				<Form.Field>
					<Label>Password</Label>
					<Input
						name='newPassword'
						type='password'
						value={newPassword}
						placeholder='new password'
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

export default withRouter(ChangePassword)
