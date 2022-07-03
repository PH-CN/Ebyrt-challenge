import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListContext from './Context';
import { useNavigate } from 'react-router-dom';
 
function ListProvider({ children }) {
	const navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (username.length >= 5 && password.length >= 5) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [username, password]);

	const handleChangeLogin = ({ target }) => {
		const { value, name } = target;
		if (name === 'username') {
			setUsername(value);
		}
		if (name === 'email') {
			setPassword(value);
		}
	};

	// const handleLoginSubmitButton = async (event) => {
	// 	event.preventDefault();
		
	// };
  
	const value = {
		navigate,
		disabled,
		password,
		username,
		handleChangeLogin
	};

	return (
		<ListContext.Provider value={ value }>
			{children}
		</ListContext.Provider>
	);
}

ListProvider.propTypes = {
	children: PropTypes.node
}.isRequired;

export default ListProvider;