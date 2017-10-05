import React, { Component } from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid/v4';

import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';

import {create} from '../../actions/transactions';




class TransactionForm extends Component {

  state = {
    fields: {
      id: uuid(),
      type: '',
      amount: 0,
      account: '',
      category: '',
      description: '',
      deleted: false
    },
    errors: {},
    completed: false,
    newId: null
  }

  componentWillMount() {
    this.setState({
      fields: {
        ...this.state.fields,
        type: this.props.type.name,
        account: this.props.accounts[0].name,
        category: this.props.categories[0].name
      }
    })
  }

//TODO: reset select values on type change
  inputHandler = ({target}) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [target.name]: target.value
      }
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.createTransaction({...this.state.fields})
  }

  render() {
    const {fields: {type, amount, account, category, description, deleted}, errors, completed, newId} = this.state;
    const {accounts, categories} = this.props;

    return (
      <div>
        <form className="form" onSubmit={this.submitHandler}>
          <div className="form-title">
            Transaction Form
          </div>
          <div className="form-group">
            <div className="input-label">Amount</div>
            <input
              name="amount"
              type="number"
              value={amount}
              min={0}
              onChange={this.inputHandler}
              onBlur={this.fieldBlurHandler}
            />
            {errors['amount'] && (
              <div className="input-error">{errors['amount']}</div>
            )}
          </div>
          <div className="form-group">
            <div className="input-label">Description</div>
            <textarea
              name="description"
              type="text"
              value={description}
              onChange={this.inputHandler}
              onBlur={this.fieldBlurHandler}
            />
            {errors['amount'] && (
              <div className="input-error">{errors['amount']}</div>
            )}
          </div>
          <div className="form-group">
            <div className="input-label">Account</div>
            <select
              name="account"
              value={account}
              onChange={this.inputHandler}
            >
              {accounts.map(a => <option value={a.name}>{a.name}</option>)}
            </select>
          </div>
          {type !== 'transfer' && (
            <div className="form-group">
              <div className="input-label">Category</div>
              <select
                name="category"
                value={category}
                onChange={this.inputHandler}
              >
                {categories.map(c => <option value={c.name}>{c.name}</option>)}
              </select>
            </div>
          )}
          <div className="form-group">
            <button className="btn btn-md">
              Save
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const stateToProps = state => ({
  accounts: state.accounts,
  categories: state.categories
})

const dispatchToProps = dispatch => ({
  createTransaction(data) {
    dispatch(create(data));
  }
})

export default connect(stateToProps, dispatchToProps)(TransactionForm);