import React, { useContext } from 'react';
import ListContext from '../context/Context';

export default function Register() {
	const {
		handleChangeLogin,
		handleSubmitBtn,
		username,
		password,
		disabled,
	} = useContext(ListContext);
	return (
		<>
			<header className='App'>
				<h1>Registration</h1>
			</header>
			<form className='App'>
      Username:
				<label htmlFor="username">
					<input
						type="text" 
						name="username"
						value={ username }
						onChange={ handleChangeLogin }
					/>
				</label>
				<label htmlFor="email">
        Email:
					<input
						type="text" 
						name="email"
						value={ password }
						onChange={ handleChangeLogin }
					/>
				</label>
				<button 
					type="submit"
					disabled={ disabled }
					onClick={ handleSubmitBtn }
				>
        Submit
				</button>
			</form>
		</>
	);
}