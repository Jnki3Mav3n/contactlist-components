import React, {useState, useEffect} from 'react';
import {uuid} from 'uuidv4';
import '../styles/App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const localStorageKey = "contacts";
  const [contacts, setContacts] = useState([]);

  // {
  //   id: "001",
  //   name: "Manuel",
  //   email: "manu.ar217@gmail.com"
  // },
  // {
  //   id: "002",
  //   name: "Nelly",
  //   email: "nategaleano@gmail.com"
  // }

  const addContactHandler = contact => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  const remContactHandler = id => {
    const newCList = contacts.filter(contact => {
      return contact.id !== id;
    });

    setContacts(newCList);
  }

  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(localStorageKey));
    if (getContacts) setContacts(getContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={remContactHandler}/>
    </div>
  );
}

export default App;
