import { Component } from 'react'
import PropTypes from "prop-types";
import css from './Filter.module.css'

class Filter extends Component {
   
    render() {
        const {filter, searchContact} = this.props
        return (
            <div className={css.filter}>
                <h3>Find contacts by name</h3>
                <input 
                    name="name"
                    type="text" 
                    className={css.filter_input} 
                    id="inputName" 
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    aria-describedby="nameHelp"
                    onChange={searchContact}
                    value={filter}
                />
            </div>
        )
    }
}

export default Filter

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
  };