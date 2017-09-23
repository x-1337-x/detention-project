import uuid from 'uuid/v4';

import {TRANSACTIONS_DELETE} from '../actions/transactions';

const defaultState = [
  {
    id: uuid(),
    type: 'income',
    amount: 4000,
    account: 'Salary',
    category: 'Monthly income',
    description: 'Milk, bread, candies'
  }, {
    id: uuid(),
    type: 'expense',
    amount: 33.15,
    account: 'Salary',
    category: 'Groceries',
    description: 'Milk, bread, candies'
  }, {
    id: uuid(),
    type: 'transfer',
    amount: 33.15,
    newAmount: 133.15,
    account: 'Salary',
    newAccount: 'Savings',
    category: 'New car'
  }
]

export default (prevState = defaultState, action) => {
  switch(action.type){

    case TRANSACTIONS_DELETE:
      const {id} = action;
      return prevState.filter(el => el.id !== id)

    default:
      return prevState;
  }
}