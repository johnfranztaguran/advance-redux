import React from 'react';
import './App.css';
import Login from './components/login';
import Signup from './components/Signup';
import AppTest from './components/apiTest';
import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/userActions';
import { bindActionCreators } from 'redux';

import { createSelector } from 'reselect';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  // componentDidMount() {
  //   this.props.onApiRequest();
  // }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render () {
    // console.log('App ==>', this.props)
    return (
      <div className="App">
        {/* <Login /> */}
        <Signup />
        <AppTest />
        <div onClick={this.onUpdateUser}>Update User</div>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

// const mapStateToProps = (state, props) => {
//   console.log(props)
//   return {
//     products: state.products,
//     user: state.user,
//     userPlusProp: `${state.user} ${props.randomProps}`
//   }
// }

const productsSelector = createSelector(
  state => state.products,
  products => products
)
const userSelector = createSelector(
  state => state.user,
  user => user
)

const mapStateToProps = createSelector(
  productsSelector,
  userSelector,
  (products, user) => ({
    products,
    user
  })
)

// const mapActionsToProps = (dispatch, props) => {
//   console.log('mapActionsToProps', props)
//   return bindActionCreators({
//     onUpdateUser: updateUser
//   }, dispatch)
// }

const mapActionsToProps =  {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
}

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log('mergeProps ==', propsFromState, propsFromDispatch, ownProps)
// }

export default connect(
  mapStateToProps,
  mapActionsToProps,
  // mergeProps
)(App);
