import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import SnackDetail from './components/snackDetail';
import SnackList from './components/snackList';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      snacks: [
        {id: 1234, name: "abcd", desc: "yaya"},
        {id: 5678, name: "efgh", desc: "nana"},
      ]      
    }
    this.renderSnackDetail = this.renderSnackDetail.bind(this)
  }

  renderSnackDetail(props){
    const snackId = parseInt(props.match.params.id);
    const snack = this.state.snacks && this.state.snacks.find(snack => snack.id === snackId);

    return <SnackDetail snack={snack}/>
  }

  render(){
    return(
      <Router>
        <h1>Hello World</h1>
        <Switch>
          <Route exact path="/">
            <SnackList snacks={this.state.snacks}/>
          </Route>

          <Route path="/:id" render={this.renderSnackDetail} />

        </Switch>
      </Router>
    )
  }
}

