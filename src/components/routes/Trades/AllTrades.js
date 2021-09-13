import React, { useState, useEffect } from 'react'
import { List } from 'semantic-ui-react'
import { indexTrades } from '../../../api/trades'
import messages from '../../shared/AutoAlert/messages'

const AllTrades = (props) => {
	// const cardContainerLayout = {
	// 	display: 'flex',
	// 	justifyContent: 'center',
	// 	flexFlow: 'row wrap',
	// }

	// const cardStyles = {
	// 	height: '90%',
	// 	width: '18rem',
	// 	margin: '10px',
	// }
	const [trades, setTrades] = useState([])
	const { user, msgAlert } = props

	useEffect(() => {
		indexTrades(user)
			.then((res) => {
                console.log('all trades in AllTrades \n', res.data);
                
				setTrades(res.data.trades)
			})
			.then(() =>
				msgAlert({
					heading: 'Got All Trades!',
					msg: messages.tradesUpdated,
					variant: 'olive',
				})
			)
			.catch((error) => {
				msgAlert({
					heading: 'Failed to load trades: ' + error.message,
					msg: messages.tradesFailed,
					variant: 'red',
				})
			})
	}, [])

	if (trades.length > 0) {
        console.log('this is the trades', trades);
        
        const allTheTrades = trades.map((trade) => (
            <List.Item key={trade.id}>
                <List.Icon name='arrows alternate horizontal' />
                <List.Content>
                    <List.Header as='a'>
                        {trade.from_user} traded {trade.copy_from} for {trade.to_user}'s {trade.copy_to}
                    </List.Header>
                    <List.Description as='a'>Last Update {trade.updated_at}</List.Description>
                </List.Content>
            </List.Item>
        ))
		return <List divided relaxed>{allTheTrades}</List>
	} else {
		return <p>no copies</p>
	}
}

export default AllTrades
