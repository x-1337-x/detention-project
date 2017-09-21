import './style.css';

import React from 'react';
import classnames from 'classnames';

const operations = [
  {
    id: 1,
    type: 'income',
    amount: 4000,
    account: 'Salary',
    category: 'Monthly income',
    description: 'Milk, bread, candies'
  }, {
    id: 2,
    type: 'expense',
    amount: 33.15,
    account: 'Salary',
    category: 'Groceries',
    description: 'Milk, bread, candies'
  }, {
    id: 3,
    type: 'transfer',
    amount: 33.15,
    newAmount: 133.15,
    account: 'Salary',
    newAccount: 'Savings',
    category: 'New car'
  },{
    id: 4,
    type: 'income',
    amount: 4000,
    account: 'Salary',
    category: 'Monthly income',
    description: 'Milk, bread, candies'
  }, {
    id: 5,
    type: 'expense',
    amount: 33.15,
    account: 'Salary',
    category: 'Groceries',
    description: 'Milk, bread, candies'
  }, {
    id: 6,
    type: 'transfer',
    amount: 33.15,
    newAmount: 133.15,
    account: 'Salary',
    newAccount: 'Savings',
    category: 'New car'
  },{
    id: 7,
    type: 'income',
    amount: 4000,
    account: 'Salary',
    category: 'Monthly income',
    description: 'Milk, bread, candies'
  }, {
    id: 8,
    type: 'expense',
    amount: 33.15,
    account: 'Salary',
    category: 'Groceries',
    description: 'Milk, bread, candies'
  }, {
    id: 9,
    type: 'transfer',
    amount: 33.15,
    newAmount: 133.15,
    account: 'Salary',
    newAccount: 'Savings',
    category: 'New car'
  },{
    id: 10,
    type: 'income',
    amount: 4000,
    account: 'Salary',
    category: 'Monthly income',
    description: 'Milk, bread, candies'
  }, {
    id: 11,
    type: 'expense',
    amount: 33.15,
    account: 'Salary',
    category: 'Groceries',
    description: 'Milk, bread, candies'
  }, {
    id: 12,
    type: 'transfer',
    amount: 33.15,
    newAmount: 133.15,
    account: 'Salary',
    newAccount: 'Savings',
    category: 'New car'
  },{
    id: 13,
    type: 'income',
    amount: 4000,
    account: 'Salary',
    category: 'Monthly income',
    description: 'Milk, bread, candies'
  }, {
    id: 14,
    type: 'expense',
    amount: 33.15,
    account: 'Salary',
    category: 'Groceries',
    description: 'Milk, bread, candies'
  }, {
    id: 15,
    type: 'transfer',
    amount: 33.15,
    newAmount: 133.15,
    account: 'Salary',
    newAccount: 'Savings',
    category: 'New car'
  },{
    id: 16,
    type: 'income',
    amount: 4000,
    account: 'Salary',
    category: 'Monthly income',
    description: 'Milk, bread, candies'
  },{
    id: 17,
    type: 'income',
    amount: 4000,
    account: 'Salary',
    category: 'Monthly income',
    description: 'Milk, bread, candies'
  }, {
    id: 18,
    type: 'expense',
    amount: 33.15,
    account: 'Salary',
    category: 'Groceries',
    description: 'Milk, bread, candies'
  }, {
    id: 19,
    type: 'transfer',
    amount: 33.15,
    newAmount: 133.15,
    account: 'Salary',
    newAccount: 'Savings',
    category: 'New car'
  },{
    id: 20,
    type: 'income',
    amount: 4000,
    account: 'Salary',
    category: 'Monthly income',
    description: 'Milk, bread, candies'
  }
]

const accounts = [
  {
    label: 'Salary',
    value: 500,
    currency: '$'
  }, {
    label: 'Savings',
    value: 25000,
    currency: '€'
  }, {
    label: 'Na pivasik i rybku s krabami',
    value: 4,
    currency: '€'
  }
]

export default () => (
  <div className="dashboard">
    <Accounts />
    <Operations operations={operations} />
  </div>
)

const Accounts = () => (
  <div className="dashboard-accounts widget">
    <div className="widget--title">Accounts</div>
    <div className="widget--content">
      {accounts.map(a => (

        <div className="dashboard-accounts--item">
          <div className="dashboard-accounts--item-label">{a.label}</div>
          <div className="dashboard-accounts--item-total">
            <span className="dashboard-accounts--item-value">{a.value}</span>
            <span className="dashboard-accounts--item-currency">{a.currency}</span>
          </div>
        </div>

      ))}
    </div>
  </div>
)

const Operations = ({operations}) => (
  <div className="dashboard-operations widget">
    <div className="widget--title">Operations</div>
    <div className="widget--content">

      {operations.map(o => (
        <Operation {...o} key={o.id} />
      ))}

    </div>
  </div>
)

const Operation = ({id, type, account, amount, description, category, newAmount, newAccount}) => (
  <div className="dashboard-operations--item">
    <div className="dashboard-operations--item-text">
      <div className="dashboard-operations--item-account">
        [
          {account}
          {newAccount && (
            <span> &rarr; {newAccount}</span>
          )}
        ]
      </div>
      <div className="dashboard-operations--item-label">
        {category}
      </div>
      {description && (
        <div className="dashboard-operations--item-description">
          {description}
        </div>
      )}
    </div>
    <div className="dashboard-operations--item-actions">actions</div>
    <div className={
      classnames("dashboard-operations--item-amount", `color--${type}`)
    }>
      {type === 'income' && '+'}
      {type === 'expense' && '-'}
      {amount} $
      {newAmount && (
        <span> &rarr; {newAmount} $</span>
      )}
    </div>
  </div>
)
