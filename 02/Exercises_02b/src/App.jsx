import { useState, useEffect } from 'react';
import Person from './components/Person';
import AddForm from './components/AddForm';
import SearchForm from './components/SearchForm';
import axios from 'axios';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);

  function fetchPersons() {
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log(response);
      setPersons(response.data);
    });
  }

  useEffect(() => fetchPersons, []);

  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  function addName(e) {
    e.preventDefault();
    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: number,
    };

    const duplicates = persons.some((person) => person.name === newName);

    if (duplicates) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat(nameObject));
      setNewName('');
      setNumber('');
    }
  }
  useEffect(() => {
    function search() {
      setSearchTerm(searchTerm);

      if (searchTerm === '') {
        setFilteredPersons(persons);
      } else {
        const filtered = persons.filter((person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPersons(filtered);
      }
    }
    search();
  }, [persons, searchTerm]);

  return (
    <main>
      <h2>Phonebook</h2>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2>Add a new</h2>
      <AddForm
        newName={newName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
        number={number}
      />
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
      </ul>
      {/* <div>debug: {newName}</div> */}
    </main>
  );
}

export default App;
