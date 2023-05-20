import { Component } from 'react'
import Phonebook from './Phonebook/Phonebook'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
import { nanoid } from "nanoid";
import css from './App.module.css'

class App extends Component {
	state = {
		contacts: [],
		filter: '',
  	}
  componentDidMount(){
    const localData = localStorage.getItem('contacts')// this method gets a list of todo items from localstorage
      if ( localData ) {
        this.setState({ contacts: JSON.parse(localData) })
      }
  }
  componentDidUpdate (prevProps, prevState) {
		if ( prevState.contacts !== this.state.contacts ) {
			localStorage.setItem('contacts', JSON.stringify(this.state.contacts))//puts updated state object to localstarage
		}
  }
	contactId = () => {
		return nanoid()
	};
	createContact = (data) => {
		const newContact = {
			...data,
			id: this.contactId(),
		}
		if (this.state.contacts.find(contact => 
			contact.name === newContact.name
			|| contact.number === newContact.number)) {
			alert(`${newContact.name} is already in contacts.`);
			return;
		  }
		this.setState((prevState) => {
			return {contacts: [...prevState.contacts, newContact]}
		});
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
	}
	searchContact = (evt) => {
		const { value } = evt.target
        this.setState({
            filter: value,
        })
		const filterContacts = this.state.contacts.filter(
			contact => {
				const name = contact.name.toLowerCase(); 
				const search = this.state.filter.toLowerCase();
				return name.includes(search);
			} 
		)
		this.setState({
            filterContacts: filterContacts,
        })
	}
	removeContact = (id) => {
		this.setState((prev) => ({
			contacts: prev.contacts.filter((el) => el.id !== id)
		}))
	}
	render(){
		return (
				<div className={css.container}>
  					<h2>Phonebook</h2>
  					<Phonebook 
						  createContact={this.createContact}
					  />
  					<h2>Contacts</h2>
  					<Filter
						  filter={this.state.filter}
						  searchContact={this.searchContact}
					  />
  					<ContactList
						  contacts={this.state.contacts}
						  filterContacts={this.state.filterContacts}
						  filter={this.state.filter}
						  removeContact={this.removeContact}
					  />
				</div>
			)
	}
}

export default App
