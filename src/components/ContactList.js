import React from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = props => {
    console.log(props);

    const delContact = id => {
        props.getContactId(id);
    };

    // const contacts = [
    //     {
    //         id: "001",
    //         name: "Manuel",
    //         email: "manu.ar217@gmail.com"
    //     },
    //     {
    //         id: "002",
    //         name: "Nelly",
    //         email: "nategaleano@gmail.com"
    //     }
    // ];

    const renderCList = props.contacts.map(contact => {
        return <ContactCard contact={contact} clickHandler={delContact} key={contact.id}></ContactCard>;
    });

    return (
        <div class="main">
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>
            </h2>
            <div className="ui celled list">
                {renderCList}
            </div>
        </div>
    );
};

export default ContactList