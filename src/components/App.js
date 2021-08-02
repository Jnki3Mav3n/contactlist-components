import React, {useState} from 'react';
import '../styles/App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
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
  };

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
