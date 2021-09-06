import React, { useState } from 'react'
import { Container, Menu, Button } from 'semantic-ui-react'

const Header = () => {
    // WHY AREN'T MY HOOKS WORKING? DO I WANT/NEED THEM IN THIS CASE??
    const [activeItem, setActiveItem] = useState('home')

    const handleItemClick = (e, { name }) => {
        console.log(e.target) 
        setActiveItem(name)
    }
    console.log('this is activeItem in header', activeItem);
    
    return (
			<Container>
				<h1>Librarium</h1>
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

export default Header