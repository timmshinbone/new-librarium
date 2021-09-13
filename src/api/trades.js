import apiUrl from '../apiConfig'
import axios from 'axios'

// Index request
// no data, we will need a token
export const indexTrades = (user) => {
	return axios({
		// method key sets the HTTP verb/method for this request
		// GET is the default method, so we can include or not up to us
		method: 'GET',
		url: apiUrl + '/trades',
		headers: {
			Authorization: `Token ${user.token}`,
		},
	})
}

export const showTrade = (user, trade) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/trades/' + trade.id,
		headers: {
			Authorization: `Token ${user.token}`,
		},
	})
}
