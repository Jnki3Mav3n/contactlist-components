import React from 'react';
import ContactCard from './ContactCard';

const ContactList = props => {
    console.log(props);

    const delContact = id => {
        props.getContactId(id);
    };

    const renderCList = props.contacts.map(contact => {
        return <ContactCard contact={contact} clickHandler={delContact} key={contact.id}></ContactCard>;
    })

    return (
        <div className="ui celled list">
            {renderCList}
        </div>
    )
}

export default ContactList