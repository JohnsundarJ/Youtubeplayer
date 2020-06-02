import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {HashRouter as Router} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {BrowserRouter as Router} from 'react-router-dom';
// import axios from 'axios';

ReactDOM.render(
    // <Router>
    // function componentDidMount(){
    //     this.timerID = setInterval(
    //       () => this.checklimitfun(),
    //       60000
    //     )
    //   },
    //   async componentWillUnmount() {
    //     clearInterval(this.timerID)
    //   },
    //   checklimitfun() {
    //     axios.post('http://localhost:4000/checklimit')
    //       .then(response => {
    //         console.log("send mail")
    //       })
    //       .catch(console.log)
    //   },
      <App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();