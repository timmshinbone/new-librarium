import apiUrl from '../apiConfig'
import axios from 'axios'

// Index request
// no data, we will need a token
export const indexCopies = (user) => {
	return axios({
		// method key sets the HTTP verb/method for this request
		// GET is the default method, so we can include or not up to us
		method: 'GET',
		url: apiUrl + '/copies',
		headers: {
			Authorization: `Token ${user.token}`,
		},
	})
}

export const showCopy = (user, copy) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/copies/' + copy.id,
		headers: {
			Authorization: `Token ${user.token}`,
		},
	})
}
