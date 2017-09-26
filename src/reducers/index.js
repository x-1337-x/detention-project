import {combineReducers} from 'redux';

import accounts from './accounts';
import transactions from './transactions';
import flashes from './flashes';
import auth from './auth';

export default combineReducers({
  accounts, 
  transactions,
  flashes,
  auth
});