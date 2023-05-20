import React from 'react'
import PropTypes from "prop-types";
import css from '../ContactItem/ContactItem.module.css'

const ContactItem = ({contact, removeContact}) => {
	// function handleCheck() {
	// 			check(todo.id)
	// 		}
	return (
			<li 
            	key={contact.id} 
            	className={css.list_group_item}
            >
                {contact.name}: {contact.number}
                <button 
                    type="button" 
                    className={css.btn_danger}
                    onClick={() => removeContact(contact.id)}
                >
                    Delete
                </button>
            </li>
		// <li className='list-group-item'>
		// 	<div className='row justify-content-between'>
		// 		<div className="col-10">
		// 			<input 
		// 			className='form-check-input me-2' 
		// 			type="checkbox" 
		// 			onChange={handleCheck}
		// 			checked={todo.completed}
		// 			/>
		// 			{todo.title}
		// 		</div>
		// 		<div className="col">
		// 			<button
		// 				type='button'
		// 				className='btn-close'
		// 				aria-label='Close'
		// 				onClick={() => handleDelete(todo.id)}
		// 			></button>
		// 		</div>
		// 	</div>
		// </li>
	)
}

export default ContactItem

ContactItem.propTypes = {
	contact: PropTypes.shape({
		  		name: PropTypes.string.isRequired,
		  		number: PropTypes.string.isRequired,
		  		id: PropTypes.string.isRequired,
		}).isRequired,
};
