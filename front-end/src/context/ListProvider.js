import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import ListContext from './Context';
import { useNavigate } from 'react-router-dom';
 
function ListProvider({ children }) {
	const navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);
	const [disabled, setDisabled] = useState(true);
	const [isLogged, setIsLogged] = useState(false);

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
		if (name === 'password') {
			setPassword(value);
		}
	};

	const handleTaskChange = ({ target }) => {
		const { value } = target;
		setTask(value);
	};

	const handleBackBtn = () => {
		navigate(-1);
	};

	const handleLoginBtn = (event) => {
		event.preventDefault();
		Axios.get('http://localhost:3333/users',)
			.then((result) => {
				const user = result.data
					.find((user) => user.name === username && user.password === password);
				if (user) {
					setIsLogged(true);
					navigate('/list', { replace: true });
				} else {
					setIsLogged(false);
					alert('User not find, please sign in first');
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleTaskBtn = () => {
		setTasks([...tasks, task]);
	};

	const handleSubmitBtn = async (event) => {
		event.preventDefault();

		Axios.post('http://localhost:3333/register', {
			name: username, password
		}).then(() => {
			alert('User successfully created');
		})
			.catch(() => {
				alert('User already exists');
			});
	};
  
	const value = {
		navigate,
		disabled,
		password,
		username,
		task,
		isLogged,
		handleChangeLogin,
		handleSubmitBtn,
		handleBackBtn,
		handleLoginBtn,
		handleTaskChange,
		handleTaskBtn
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