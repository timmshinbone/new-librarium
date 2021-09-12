import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const BookCards = (props) => {
    const cardContainerLayout = {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'row wrap'
    }

    const cardStyles= {
        height: '90%',
        width: '18rem',
        margin: '10px'
    }

    console.log('props', props);
    
    if(props.books.length > 0) {
        const allBooks = props.books.map((book) => {
            return (
                <Card key={book.id} style={cardStyles}>
                    <Image src={book.image} wrapped ui={false} fluid />
                    <Card.Content>
                        <Card.Header>{book.title}</Card.Header>
                        <Card.Description>{book.author}</Card.Description>
                        <small>published: {book.published}</small>
                        <br />
                        <small>pages: {book.pages}</small>
                    </Card.Content>
                </Card>
            )
        })

        return (
            <div style={cardContainerLayout}>
                { allBooks }
            </div>
        )
    } else {
        return (
            <p>no book</p>
        )
    }

}

export default BookCards