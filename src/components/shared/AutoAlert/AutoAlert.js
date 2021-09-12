import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

const msgStyle = {
    'display': 'flex',
    'flexDirection': 'column',
    'maxWidth': '30rem',
    'minWidth': '18rem',
    'position': 'fixed',
    'alignItems': 'center',
    'alignSelf': 'center',
    'bottom': '5px',
    'left': '30rem',
    'right': '30rem',
    'zIndex': '10000'
}

// messages will require a color passed as the prop 'variant'
// success messages should send 'olive'
// failure/warning messages should send 'red'

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
                dismissible="true"
                style={msgStyle}
                onDismiss={this.handleDismiss}
                color={ variant }
                show={this.state.show}
            >
                <Message.Header>{heading}</Message.Header><br/>
                <Message.Content>{msg}</Message.Content>
            </Message>
        )
    }
}

export default AutoAlert