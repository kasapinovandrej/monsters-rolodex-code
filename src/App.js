import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import Search from './components/search-box/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => this.setState({ monsters: data }))
  }

  searchInputText = (e) => {
    this.setState({ search: e.target.value })
  }
  render() {
    const { search, monsters } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search searchInputText={this.searchInputText} placeholder="Search..." />
        <CardList monsters={filteredMonsters} />
      </div >
    );
  }
}

export default App;
