import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

const msgStyle = {
    'display': 'flex',
    'max-width': '30rem',
    'position': 'fixed',
    'align-items': 'center',
    'bottom': '5px',
    'left': '30rem',
    'right': '30rem'
}

class AutoAlert extends Component {
    constructor (props) {
        super(props)
        this.state = {
            show: true
        }
        this.timeoutId = null
    }

    componentDidMount () {
        console.log('alert mounted');
        
        this.timeoutId = setTimeout(this.handleDismiss, 3000)
    }

    componentWillUnmount () {
        console.log('alert cleared');
        
        clearTimeout(this.timeoutId)
    }

    handleDismiss = () => this.setState({ show: false })

    render () {
        const { variant, heading, msg, deleteAlert, id } = this.props

        if(!this.state.show) {
            setTimeout(() => {
                deleteAlert(id)
            }, 3000)
        }

        return (
            <Message
                style={msgStyle}
                onDismiss={this.handleDismiss}
                color={ variant }
                show={this.state.show}
            >
                <Message.Header>{heading}</Message.Header>
                <p>{msg}</p>
            </Message>
        )
    }
}

export default AutoAlert