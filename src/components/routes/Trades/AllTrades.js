import React, { useState, useEffect } from 'react'
import { List } from 'semantic-ui-react'
import { indexTrades } from '../../../api/trades'
import messages from '../../shared/AutoAlert/messages'

const AllTrades = (props) => {
	const pendingStyle = {
		backgroundColor: 'lightYellow',
	}
	const approvedStyle = {
		backgroundColor: 'lightGreen',
	}
	const declinedStyle = {
		backgroundColor: 'indianRed',
	}

	const pickStyle = (stat) => {
		if (stat === 'pending') {
			return pendingStyle
		} else if (stat === 'approved') {
			return approvedStyle
		} else if (stat === 'declined') {
			return declinedStyle
		}
	}

	const pickIcon = (stat) => {
		if (stat === 'pending') {
			return 'arrows alternate horizontal'
		} else if (stat === 'approved') {
			return 'thumbs up outline'
		} else if (stat === 'declined') {
			return 'thumbs down outline'
		}
	}
	// thumbs up outline
	// thumbs down outline
    // 'arrows alternate horizontal'

	const [trades, setTrades] = useState([])
	const { user, msgAlert } = props

	useEffect(() => {
		indexTrades(user)
			.then((res) => {
				console.log('all trades in AllTrades \n', res.data)

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
		console.log('this is the trades', trades)

		const allTheTrades = trades.map((trade) => (
			<List.Item key={trade.id} style={pickStyle(trade.status)}>
				<List.Icon name={pickIcon(trade.status)} />
				<List.Content>
					<List.Header as='a'>
						{trade.from_user}{' '}
						{trade.status === 'approved' ? 'traded' : 'requested to trade'}{' '}
						{trade.copy_from.book.title} for {trade.to_user}'s{' '}
						{trade.copy_to.book.title}
					</List.Header>
					<List.Description as='a'>
						Last Update {trade.updated_at}
					</List.Description>
					<small>status: {trade.status}</small>
				</List.Content>
			</List.Item>
		))
		return (
			<List divided relaxed size='big'>
				{allTheTrades}
			</List>
		)
	} else {
		return <p>no trades</p>
	}
}

export default AllTrades
