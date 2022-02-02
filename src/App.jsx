
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomer, addManyCustomer, removeCustomer } from './store/customerReducer';
import { addCash, getCash } from './store/cashReducer';
import { fetchUsers } from './AsyncFunctions/getUsers';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  console.log('cash: ', cash);
  console.log('customers: ', customers);

  const add = (cash) => dispatch(addCash(cash))

  const get = (cash) => dispatch(getCash(cash))

  const addCustomerHandler = (name) => {
    dispatch(addCustomer({
        name,
        id: Date.now()
    }))
  }

  const removeCustomerHandler = (id) => dispatch(removeCustomer(id))

  return (
    <div className='app'>
      <div style={{fontSize: 20}}>{cash}</div>
      <div style={{display: 'flex', marginTop: 25}}>
        <button onClick={() => add(Number(prompt()))}>Add Cash</button>
        <button onClick={() => get(Number(prompt()))}>Get Cash</button>
        <button onClick={() => addCustomerHandler(prompt())}>Add Customer</button>
        <button onClick={() => dispatch(fetchUsers())}>Get Users From Database</button>
      </div>
      <div>
            {customers.length
              ?
              <>
                <h3>Clients: </h3>
                {customers.map((customer, i) => 
                  <div key={customer.id}>
                    <span>{i + 1}. </span>
                    <button onClick={() => removeCustomerHandler(customer.id)}>{customer.name}</button>
                  </div>
                )}
              </>
              :
              <h3>No Clients</h3>
            }
      </div>
    </div>
  );
}

export default App;
