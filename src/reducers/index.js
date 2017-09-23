import {combineReducers} from 'redux';

import accounts from './accounts';
import transactions from './transactions';
import flashes from './flashes';

export default combineReducers({
  accounts, 
  transactions,
  flashes
});