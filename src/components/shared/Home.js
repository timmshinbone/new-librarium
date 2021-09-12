import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import { indexBooks } from '../../api/books'
import messages from '../shared/AutoAlert/messages'

import BookCards from './BookCards'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        const { msgAlert, user } = this.props
        console.log('ms', msgAlert);
        
        indexBooks(user)
            .then(res => {
                this.setState({ books: res.data.books })
            })
            .then(() =>
				msgAlert({
					heading: 'Books Updated!',
					msg: messages.booksUpdated,
					variant: 'olive',
				})
			)
            .catch((error) => {
				msgAlert({
					heading: 'Failed to load books: ' + error.message,
					msg: messages.booksFailed,
					variant: 'red',
				})
			})
    }

    render(props) {
        const { books } = this.state
        
        return (
            // <h6>books</h6>
            <div>
                <BookCards books={books} />
            </div>
        )
    }
}

export default withRouter(Home)