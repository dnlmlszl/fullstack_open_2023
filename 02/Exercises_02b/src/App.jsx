import { useState } from 'react';
import Person from './components/Person';
import AddForm from './components/AddForm';
import SearchForm from './components/SearchForm';
import { useEffect } from 'react';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);

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
