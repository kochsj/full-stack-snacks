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
import SnackForm from './components/snackForm';

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
    this.formHandler = this.formHandler.bind(this)
    this.deleteHandler = this.deleteHandler.bind(this)
    this.updateHandler = this.updateHandler.bind(this)

  }

  renderSnackDetail(props){
    const snackId = parseInt(props.match.params.id);
    const snack = this.state.snacks && this.state.snacks.find(snack => snack.id === snackId);
    if(snack){
      return <SnackDetail snack={snack} doneHandler={this.updateHandler} deleteHandler={this.deleteHandler}/>
    } else{
      return <Redirect to="/" />
    }
  }

  async formHandler(snack){
    let newSnack = snack
    let newList = this.state.snacks
    newList.push(newSnack)

    this.setState({
      snacks : newList
    })
  }

  async updateHandler(snack){
    console.log('input update: ', snack)
    this.setState({
      snacks : this.state.snacks.map(snk => {
        if(snk.id === snack.id){
          return snack;
        }else{
          return snk;
        }
      })
    })
  }

  async deleteHandler(event){
    let snackToDelete = event.target.value
    console.log('should be id: ', snackToDelete)
    const lst = this.state.snacks.filter(snack => snack.id !== Number(snackToDelete))
    this.setState({
      snacks : lst,
    })
  }

  render(){
    return(
      <Router>
        <h1>Hello World</h1>
        <Switch>
          <Route exact path="/">
            <SnackList snacks={this.state.snacks} doneHandler={this.formHandler}/>
          </Route>

          <Route path="/:id" render={this.renderSnackDetail} />

        </Switch>
      </Router>
    )
  }
}

