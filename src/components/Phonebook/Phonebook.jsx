import { Component } from 'react'
import css from './Phonebook.module.css'

class Phonebook extends Component {
    state = {
    	name: '',
		number: '',
  	}
    handleChange = ( evt ) => {
		const { name, value } = evt.target
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.createContact({
            name: this.state.name,
            number: this.state.number,
        })
        this.setState({
            name: '',
            number: '',
        })
    }
    render(){
        return (
            <form className={css.phonebook} onSubmit={this.handleSubmit}>
                <div className={css.phonebook_input}>
                    <label 
                        htmlFor="inputName" 
                        className="form-label"
                    >
                        Name
                    </label>
                    <input 
                        name="name"
                        type="text" 
                        className={css.form_control} 
                        id="inputName" 
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        aria-describedby="nameHelp"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                </div>
                <div className={css.phonebook_input}>
                    <label 
                        htmlFor="inputNumber" 
                        className={css.form_label}
                    >
                        Number
                    </label>
                    <input 
                        name="number"
                        type="tel" 
                        className={css.form_control} 
                        id="inputNumber" 
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        aria-describedby="numberHelp"
                        onChange={this.handleChange}
                        value={this.state.number}
                    />
                </div>
                <button 
                    type="submit" 
                    className={css.btn_primary}
                    disabled={ !this.state.name || !this.state.number }
                >
                    Add contact
                </button>
            </form>
        )
    }
}

export default Phonebook

