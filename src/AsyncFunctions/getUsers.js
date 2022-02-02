import { addManyCustomer } from "../store/customerReducer"

export const fetchUsers = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addManyCustomer(json)))
  }
}