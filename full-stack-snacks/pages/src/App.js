import React from 'react';
import axios from 'axios';
import LoginForm from './components/LoginForm'
// import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import SnackDetail from './components/snackDetail';
import SnackList from './components/snackList';
import SnackForm from './components/snackForm';

const url = 'http://167.172.203.221:8000/api/';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accessToken: '',
      refreshToken: '',
      snacks: null,
      // snacks: [
      //   {id: 1234, name: "abcd", desc: "yaya"},
      //   {id: 5678, name: "efgh", desc: "nana"},
      // ]      
    }
    this.renderSnackDetail = this.renderSnackDetail.bind(this)
    this.formHandler = this.formHandler.bind(this)
    this.deleteHandler = this.deleteHandler.bind(this)
    this.updateHandler = this.updateHandler.bind(this)
    this.loginHandler = this.loginHandler.bind(this)

  }

  async loginHandler({access, refresh}) {
    this.setState({
        accessToken : access,
        refreshToken : refresh,
    });

    try {
        const headers = {
            headers: {
                Authorization: `Bearer ${this.state.accessToken}`
            }
        }
        const response = await axios.get(url + 'v1/', headers);

        console.log(response.data);

        this.setState({
            snacks: response.data
        });

    } catch (error) {
        console.error('ruhroh');
    }

}

  renderSnackDetail(props){
    if (!this.state.accessToken) {
      return <Redirect to="/" />
    }
    const snackId = parseInt(props.match.params.id);
    const snack = this.state.snacks && this.state.snacks.find(snack => snack.id === snackId);
    console.log('trying to render {snack}: ', snack)
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
            {this.state.snacks ? <SnackList snacks={this.state.snacks} doneHandler={this.formHandler}/> : <LoginForm onSuccess={this.loginHandler} />}
          </Route>

          <Route path="/:id" render={this.renderSnackDetail} />

        </Switch>
      </Router>
    )
  }
}

