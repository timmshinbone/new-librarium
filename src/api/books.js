import apiUrl from '../apiConfig'
import axios from 'axios'

// Index request
// no data, we will need a token
export const indexBooks = (user) => {
	return axios({
		// method key sets the HTTP verb/method for this request
		// GET is the default method, so we can include or not up to us
		method: 'GET',
		url: apiUrl + '/books',
		headers: {
			Authorization: `Token ${user.token}`,
		},
	})
}

export const showBook = (user, book) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/books/' + book.id,
		headers: {
			Authorization: `Token ${user.token}`,
		},
	})
}
