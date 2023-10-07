import { useState, useEffect } from 'react';
import Person from './components/Person';
import AddForm from './components/AddForm';
import SearchForm from './components/SearchForm';
import services from './services/utils';
import Footer from './components/Footer';
import Notification from './components/Notification';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const initialPersons = await services.getAll();
        setPersons(initialPersons.persons);
      } catch (error) {
        console.error('Error fetching persons: ', error);
      }
    };
    fetchPersons();
  }, []);

  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  const addPerson = async (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: number,
    };
    try {
      const addedPerson = await services.createPerson(newPerson);
      if (addedPerson && addedPerson.person) {
        setPersons((prevPersons) => prevPersons.concat(addedPerson.person));
        setNewName('');
        setNumber('');
        setMessage(`Added ${newPerson.name} to the Phonebook`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      } else {
        throw new Error('Invalid server response');
      }
      console.log(addedPerson);
    } catch (error) {
      console.error('Error: ', error);
      setTimeout(() => {
        setMessage(`Error: Could not add ${newPerson.name} to the Phonebook`);
      }, 5000);
    }
  };

  const handleDel = async (id) => {
    const person = persons.find((prs) => prs._id === id);
    console.log(`Deleting person ${person.name}`);

    const confirmed = window.confirm(`Delete ${person.name} ?`);
    if (!confirmed) return;
    try {
      await services.deletePerson(id);
      setPersons((prevPersons) => prevPersons.filter((p) => p._id !== id));
      setMessage(`${person.name} has been deleted from the phonebook`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch (error) {
      console.log(error);
      setMessage('Error when deleting person');
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  // useEffect(() => {
  //   console.log('Persons state changed:', persons);
  // }, [persons]);

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
      <div className="main">
        <section>
          <h2>Phonebook</h2>
          <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h2>Add a new</h2>
          <AddForm
            newName={newName}
            handleNameChange={handleNameChange}
            handleNumberChange={handleNumberChange}
            addName={addPerson}
            number={number}
          />
        </section>
        <section>
          <h2>Numbers</h2>
          <ul>
            {Array.isArray(filteredPersons) &&
              filteredPersons.map((person) => {
                return (
                  <Person key={person._id} handleDel={handleDel} {...person} />
                );
              })}
          </ul>
        </section>
      </div>
      <Notification message={message} />

      <Footer />
    </main>
  );
}

export default App;
