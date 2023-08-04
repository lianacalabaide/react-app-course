import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [title, setTitle] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
  }, []);  

  useEffect(()=> {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  }  

  return (<div className="App">
    <h1 className="app-title">{title}</h1>

    <SearchBox onChangeHandler={onSearchChange}
      className='monsters-search-box'
      placeholder='search monsters new' />


    <SearchBox onChangeHandler={onTitleChange}
      className='title-search-box'
      placeholder='set title' />      

    <CardList monsters={filteredMonsters} />
  </div>)
}

/* class AppZ extends Component {

  //local state - inside of the component
  constructor() {
    super();

    //always a json object
    this.state = {
      monster: [],
      searchField: ''
    };
    console.log('constructor')
  }

  //first component render
  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monster: users }
      },
        () => {
          console.log(this.state)
        }))
  }

  onSearchChange = (event) => {
    console.log(event.target.value)
    const searchField = event.target.value.toLocaleLowerCase()


    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    console.log('render')

    const { monster, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters App</h1>

        <SearchBox onChangeHandler={onSearchChange}
          className='monsters-search-box'
          placeholder='search monsters new' />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}*/

export default App;

/*
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Hi {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}
</p>
<button name='change_name' onClick={() => {
 
 //Old set state - assync
  //this.setState( { name: {firstname: 'Joao', lastname:'Silva'}});

  //set state passando uma função e callback
  // a primeira função é a updated function
  // return a objetct to use to shallow merge
  // o callback é uma função que vc executa após terminar tudo
  // ou seja, uma vez que terminei de executar a primeira função
  // quero que execute este callback
  // callback é opcional - nao precisa ter
  this.setState(()=>{
    return { name: {firstname: 'Joao', lastname:'Silva'}}
  }, ()=>{
    console.log(this.state);
  })

  
  //shallow merge
  // vai procurar pela chave no state atual
  // e atualizar para o novo valor
  // o resto das chaves continuam iguais
  // nao se importa se é um objeto ou uma string
  //vai usar a chave e sobrescrever pelo novo valor
}}>Change Name</button>
</header> */
