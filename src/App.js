import React, { Component } from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import {Header} from './components/header/header.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      students: [],
      searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
    }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ students: users }));

  }

  handleChange(e){
    this.setState({ searchField: e.target.value })
  }
render(){
  const { students, searchField } = this.state;
  const filteredStudents = students.filter(
    student => student.name.toLowerCase().includes(searchField.toLowerCase())
  )
  return (
    <div className="App">
      <Header />
      <SearchBox placeholder="search students" handleChange={this.handleChange}/>
      <CardList students={filteredStudents} />
      
    </div>
  );
}
}

export default App;
