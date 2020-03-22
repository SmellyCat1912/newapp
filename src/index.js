import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Table from './Table'
import Nav from './Nav'
import Form from './Form'


class State extends Component{

  value = '123'
  state = {
    characters : [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bddd',
      },
    ]
  }

  removeCharacter = index => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character,i) =>{
        
        return i != index
      }),

    })
  }

  handleSubmit = character => {
    this.setState({characters:[...this.state.characters, character]})
  }

  render(){
    const { characters } = this.state
    return (
      <div >
        <Table characterData ={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<State/>, document.getElementById('root2'))
ReactDOM.render(<Nav/>, document.getElementById('root4'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
