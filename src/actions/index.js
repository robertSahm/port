import axios from 'axios'
import { browserHistory } from 'react-router'
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  // SIGNUP_USER,
  FETCH_MESSAGE,
  FETCH_USERS
} from './types'

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

const ROOT_URL = 'http://localhost:3090'

//
// User Actions
//
export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users')

  return {
    type: FETCH_USERS,
    payload: request
  }
}

// Auth Actions
export function signinUser({ email, password }) {
  return function(dispatch) { // Redux thunk middleware using dispatch method
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        // - Redux thunk in action. Dipatch is everything redux
        dispatch({ type: AUTH_USER })

        // - Save the JWT token in localstorage
        localStorage.setItem('token', response.data.token)

        // - Redirect user to the route '/feature'
        browserHistory.push('/userprofile')
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'))
      })
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', response.data.token)
        browserHistory.push('/userprofile')
      })
      .catch(response => dispatch(authError(response.data.error)))
  }
}


export function signoutUser() {
  localStorage.removeItem('token')
  return {
    type: UNAUTH_USER
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}
