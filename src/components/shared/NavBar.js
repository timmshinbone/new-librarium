import React, { useState } from 'react'
import { Container, Header, Icon, Menu, Button, Divider } from 'semantic-ui-react'
import messages from './AutoAlert/messages'

const NavBar = ({ user, msgAlert }) => {

    const [activeItem, setActiveItem] = useState('home')

    const handleItemClick = (e, { name }) => {
        console.log(e.target) 
        setActiveItem(name)
		// code for calling a msgAlert, use in all auth components
		msgAlert({
			heading: 'Test Message Success',
			msg: messages.testMessage,
			variant: 'olive'
		})
    }
    console.log('this is activeItem in header', activeItem);
    
    return (
			<Container style={{ 'paddingTop': '1rem' }} textAlign='center'>
				<Icon name='book' size='big' />
				<Header as='h1' icon>
					Librarium
				</Header>
				<Menu>
					<Menu.Item
						name='home'
						active={activeItem === 'home'}
						onClick={handleItemClick}
					/>
					<Menu.Item
						name='my books'
						active={activeItem === 'my books'}
						onClick={handleItemClick}
					/>
					<Menu.Item
						name='all books'
						active={activeItem === 'all books'}
						onClick={handleItemClick}
					/>
					<Menu.Item position='right'>
						<Button basic onClick={handleItemClick}>
							Log In
						</Button>
						<Button basic as='a' href='#sign-up'>
							Sign Up
						</Button>
					</Menu.Item>
				</Menu>
				<Divider />
			</Container>
		)
}

export default NavBar