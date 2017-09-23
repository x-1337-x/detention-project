import React from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid/v4';

import Transaction from './Transaction';

import {remove} from '../../actions/transactions';
import {add} from '../../actions/flashes';

const Transactions = ({transactions, removeTransaction}) => (
  <div className="dashboard-transactions widget">
    <div className="widget--title">Transactions</div>
    <div className="widget--content">

      {transactions.map(t => (
        <Transaction {...t} key={t.id} onRemove={removeTransaction} />
      ))}

    </div>
  </div>
)


const stateToProps = state => ({
  transactions: state.transactions
})

const dispatchToProps = dispatch => ({
  removeTransaction(id) {
    dispatch(remove(id));
    dispatch(add({
      id: uuid(),
      open: true,
      message: 'transaction has been deleted',
      hideAfter: 2000,
      vertical: 'botom',
      horizontal: 'center'
    }))
  }
})

export default connect(stateToProps, dispatchToProps)(Transactions);