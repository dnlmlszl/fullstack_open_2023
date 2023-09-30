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

  function fetchPersons() {
    services.getAll().then((initialData) => {
      setPersons(initialData);
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
    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: number };

        services
          .updatePerson(existingPerson.id, updatedPerson)
          .then(() => {
            setPersons(
              persons.map((person) =>
                person.id === existingPerson.id ? updatedPerson : person
              )
            );
            setNewName('');
            setNumber('');
            setMessage(`${updatedPerson.name}'s number has been edited`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch((error) => {
            console.log(error);
            setMessage(`${updatedPerson.name} has already been deleted`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      }
    } else {
      const nameObject = {
        // id: persons.length + 1,
        name: newName,
        number: number,
      };
      services.createPerson(nameObject).then((returnedData) => {
        setPersons(persons.concat(returnedData));
        setMessage(`Added ${returnedData.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        setNewName('');
        setNumber('');
      });
    }
  }

  function handleDel(id) {
    const person = persons.find((prs) => prs.id === id);
    console.log(`Deleteing person ${person.name}`);
    const confirmed = window.confirm(`Delete ${person.name} ?`);
    if (!confirmed) return;
    services
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter((prs) => prs.id !== id));
        setMessage(`${person.name} has been deleted from the phonebook`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        setMessage('Error when deleting person');
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
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
      <section>
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
      </section>
      <section>
        <h2>Numbers</h2>
        <ul>
          {filteredPersons.map((person) => {
            return <Person key={person.id} handleDel={handleDel} {...person} />;
          })}
        </ul>
      </section>
      {/* <div>debug: {newName}</div> */}
      <Notification message={message} />

      <Footer />
    </main>
  );
}

export default App;
