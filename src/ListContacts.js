import React, { Component } from 'react';
import propTypes from 'prop-types';

class ListContacts extends Component {

     static propTypes = {
        contacts: propTypes.array.isRequired,
        onRemoveContact: propTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (event) => {
        event.preventDefault();
        this.setState({
            query: event.target.value
        })
    }

    render(){
        return(
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                        <input 
                            className="search-contacts"
                            type="text" 
                            placeholder="search" 
                            id="" 
                            value = {this.state.query}
                            onChange = {this.updateQuery}
                        />
                </div>
            
                <ol className='contact-list'>
                    {this.props.contacts.map(contact =>(
                        <li className='contact-list-item' key={contact.id}>
                            <div 
                                className='contact-avatar'
                                style={{
                                backgroundImage: `url(${contact.avatarURL})`
                                }}
                            ></div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p> 
                            </div>
                            <button className='contact-remove' 
                            onClick = {() => this.props.onRemoveContact(contact)}>
                                remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }

}

export default ListContacts;