import './App.css';

import React, { Component } from 'react';
import classnames from 'classnames';
import { Route, NavLink } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Dvr from 'material-ui-icons/Dvr';
import AccountBalanceWallet from 'material-ui-icons/AccountBalanceWallet';
import Folder from 'material-ui-icons/Folder';
import SwapHoriz from 'material-ui-icons/SwapHoriz';
import AddCircleOutline from 'material-ui-icons/AddCircleOutline';
import RemoveCircleOutline from 'material-ui-icons/RemoveCircleOutline';
import TrendingUp from 'material-ui-icons/TrendingUp';

import Dashboard from './components/Dashboard';


const nav = [
  {
    icon: <Dvr />,
    label: 'Dashboard',
    link: '/'
  }, {
    icon: <AddCircleOutline />,
    label: 'Income',
    link: '/income'
  }, {
    icon: <RemoveCircleOutline />,
    label: 'Expense',
    link: '/expense'
  }, {
    icon: <SwapHoriz />,
    label: 'Transfer',
    link: '/transfer'
  }, {
    icon: <AccountBalanceWallet />,
    label: 'Accounts',
    link: '/accounts'
  }, {
    icon: <Folder />,
    label: 'Categories',
    link: '/categories'
  }
]

const animated = (component) => (
  <CSSTransitionGroup
    transitionName="content"
    transitionAppear={true}
    transitionAppearTimeout={0}
    transitionEnterTimeout={0}
    transitionLeaveTimeout={0}
  >{component}</CSSTransitionGroup>
)

// const AnimatedDashboard = <Animated><Dashboard /></Animated>

class App extends Component {
  render() {
    return (
      <div className="app">

        <div className="app-header"><TrendingUp style={{width: 30, height: 30}} /> <span>Rich Bitch</span></div>
        <div className="app-body">
          <div className="app-nav">
            {nav.map(({icon, label, link, subitem = false}) => (
              <NavLink exact to={link} className={
                classnames('app-nav--item')
              } activeClassName="app-nav--item__active">
                <span className="app-nav--item-icon">{icon}</span>
                <span className="app-nav--item-label">{label}</span>
              </NavLink>
            ))}
          </div>

          <div className="app-content">            
            <Route key={1} exact path="/" component={() => animated(<Dashboard />)} />
            <Route key={2} exact path="/income" component={() => animated(<div>Income</div>)} />
            <Route exact path="/expense" component={() => animated(<div>Expense</div>)} />
            <Route exact path="/transfer" component={() => animated(<div>Transfer</div>)} />
            <Route exact path="/accounts" component={() => animated(<div>Account</div>)} />
            <Route exact path="/categories" component={() => animated(<div>Categories</div>)} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
