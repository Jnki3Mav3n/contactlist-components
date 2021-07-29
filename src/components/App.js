import React from 'react';
import '../styles/App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
      id: "001",
      name: "Manuel",
      email: "manu.ar217@gmail.com"
    },
    {
      id: "002",
      name: "Nelly",
      email: "nategaleano@gmail.com"
    }
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
