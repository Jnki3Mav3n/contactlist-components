import React from 'react';
import ContactCard from './ContactCard';

const ContactList = props => {
    console.log(props);
    
    const renderCList = props.contacts.map(contact => {
        return <ContactCard contact={contact}></ContactCard>;
    })

    return (
        <div className="ui celled list">
            {renderCList}
        </div>
    )
}

export default ContactList