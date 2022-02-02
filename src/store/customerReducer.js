const defaultState = {
  customers: []
}

const ADD_USER = 'ADD_USER'
const REMOVE_USERS = 'REMOVE_USERS'
const ADD_MANY_USERS = 'ADD_MANY_USERS'

export const customerReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_USER:
      return {...state, customers: [...state.customers, action.payload]}
    case REMOVE_USERS:
      return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
    case ADD_MANY_USERS:
      return {...state, customers: [...state.customers, ...action.payload]}
    default:
      return state
  }
}

export const addCustomer = payload => ({type: ADD_USER, payload})
export const removeCustomer = payload => ({type: REMOVE_USERS, payload})
export const addManyCustomer = payload => ({type: ADD_MANY_USERS, payload})