import React,{Component} from 'react';
import Perspectives from './Perspectives';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import { createBrowserHistory as history} from 'history';

class App extends Component {
  render(){
  return (
    <Router history={history }>
    <div>
    <Switch>
<Route path="/" exact component={Perspectives} />
</Switch>
</div>
</Router>
  );
  }
}

export default App;
