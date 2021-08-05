import React from 'react';
import ContactCard from './ContactCard';

const ContactList = props => {
    console.log(props);

    const delContact = id => {
        props.getContactId(id);
    };

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
    ]
    const renderCList = contacts.map(contact => {
        return <ContactCard contact={contact} clickHandler={delContact} key={contact.id}></ContactCard>;
    })

    return (
        <div className="ui celled list">
            {renderCList}
        </div>
    )
}

export default ContactList