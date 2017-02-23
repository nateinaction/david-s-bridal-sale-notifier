// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';

import './App.css';
import actions from '../redux/actions';
import firebaseConfig from '../redux/firebaseConfig';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  componentDidMount() {
    const db = firebase.database().ref('/');

    db.on('value', snap => {
      console.log('poke')
      this.props.handleSyncFirebase(snap.val())
    });
  }

  render() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        return (
          <p>Hi there</p>
        );
      }
      console.log('not authenticated')
      return (
        <p>No user</p>
      );
    });

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	firebase: state.firebase
})

const mapDispatchToProps = (dispatch) => ({
	handleSyncFirebase: (snap) => dispatch(actions.syncFirebase(snap))
})

const AppContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(App)

export default AppContainer;
