import React, { useState, useEffect } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { indexCopies } from '../../../api/copies'
import messages from '../../shared/AutoAlert/messages'

const AllCopies = (props) => {
	const cardContainerLayout = {
		display: 'flex',
		justifyContent: 'center',
		flexFlow: 'row wrap',
	}

	const cardStyles = {
		height: '90%',
		width: '18rem',
		margin: '10px',
	}
    const [copies, setCopies] = useState([])
    const { user, msgAlert } = props

    useEffect(() => {
        indexCopies(user)
            .then((res) => {
                setCopies(res.data.copies)
            })
            .then(() =>
                msgAlert({
                    heading: 'Got All Copies!',
                    msg: messages.copiesUpdated,
                    variant: 'olive',
                })
            )
            .catch((error) => {
                msgAlert({
                    heading: 'Failed to load copies: ' + error.message,
                    msg: messages.copiesFailed,
                    variant: 'red',
                })
            })
    }, [])

	if (copies.length > 0) {
		const allCopies = copies.map((copy) => {
			return (
				<Card key={copy.id} style={cardStyles}>
					<Image src={copy.book.image} wrapped ui={false} fluid />
					<Card.Content>
						<Card.Header>{copy.book.title}</Card.Header>
						<Card.Description>{copy.book.author}</Card.Description>
						<small>published: {copy.book.published}</small>
						<br />
						<small>pages: {copy.book.pages}</small><br/>
                        <small>owned by: {copy.owner}</small>
					</Card.Content>
				</Card>
			)
		})

		return <div style={cardContainerLayout}>{allCopies}</div>
	} else {
		return <p>no copies</p>
	}
}

export default AllCopies
