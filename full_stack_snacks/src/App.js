import React from 'react';
import './App.css';
import SnackDetail from './components/snackDetail';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <>
        <h1>Hello World</h1>
        <SnackDetail />
      </>
    )
  }
}

