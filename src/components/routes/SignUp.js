import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Label, Input } from 'semantic-ui-react'

import { signUp, signIn } from '../../api/auth'
import messages from '../shared/AutoAlert/messages'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    onSignUp = event => {
        event.preventDefault()

        const { msgAlert, history, setUser } = this.props

        signUp(this.state)
            .then(() => signIn(this.state))
            .then((res) => setUser(res.data.user))
            .then(() =>
                msgAlert({
                    heading: 'Sign Up Success!',
                    msg: messages.signUpSuccess,
                    variant: 'olive',
                }))
            .then(() => history.push('/'))
            .catch(error => {
                this.setState({ email: '', password: '', passwordConfirmation: '' })
                msgAlert({
                    heading: 'Sign Up Failed with error: ' + error.message,
                    msg: messages.signUpFailure,
                    variant: 'red'
                })
            })
    }

    render () {
        const { email, password, passwordConfirmation } = this.state
        return (
            <Form onSubmit={this.onSignUp}>
                <Form.Field>
                    <Label>Email</Label>
                    <Input
                        name='email'
                        type={email}
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
                <Form.Field>
                    <Label>Password Confirmation</Label>
                    <Input
                        name='passwordConfirmation'
                        type='password'
                        value={passwordConfirmation}
                        placeholder='passwordConfirmation'
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Button color='green' type='submit'>Submit</Button>
            </Form>
        )
    }
}

export default withRouter(SignUp)