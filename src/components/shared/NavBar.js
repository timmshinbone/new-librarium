import React, { useState } from 'react'
import { Container, Header, Icon, Menu, Button, Divider } from 'semantic-ui-react'
// import messages from './AutoAlert/messages'

const NavBar = ({ user, msgAlert }) => {

    const [activeItem, setActiveItem] = useState('home')

    const handleItemClick = (e, { name }) => {
        console.log(e.target) 
        setActiveItem(name)
		// code for calling a msgAlert, use in all auth components
    }
    console.log('this is activeItem in header', activeItem);

	const unAuthOptions = (
		<Menu>
			<Menu.Item
				name='home'
				active={activeItem === 'home'}
				onClick={handleItemClick}
			/>
			<Menu.Item position='right'>
				<Button basic as='a' href='#sign-in'>
					Log In
				</Button>
				<Button basic as='a' href='#sign-up'>
					Sign Up
				</Button>
			</Menu.Item>
		</Menu>
	)

	const authOptions = (
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
				<Button basic as='a' href='#change-pw'>
					Change Password
				</Button>
				<Button basic color='red' as='a' href='#sign-out'>
					Sign Out
				</Button>
			</Menu.Item>
		</Menu>
	)

    
    return (
			<Container style={{ paddingTop: '1rem' }} textAlign='center'>
				<Icon name='book' size='big' />
				<Header as='h1' icon>
					Librarium
				</Header>
				{ user ? authOptions : unAuthOptions }
				<Divider />
			</Container>
		)
}

export default NavBar