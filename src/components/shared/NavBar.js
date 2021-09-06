import React, { useState } from 'react'
import { Container, Header, Icon, Menu, Button } from 'semantic-ui-react'

const NavBar = () => {
    // WHY AREN'T MY HOOKS WORKING? DO I WANT/NEED THEM IN THIS CASE??
    const [activeItem, setActiveItem] = useState('home')

    const handleItemClick = (e, { name }) => {
        console.log(e.target) 
        setActiveItem(name)
    }
    console.log('this is activeItem in header', activeItem);
    
    return (
			<Container style={{ 'padding-top': '1rem' }} textAlign='center'>
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
						<Button>Log In</Button>
						<Button>Sign Up</Button>
					</Menu.Item>
				</Menu>
			</Container>
		)
}

export default NavBar