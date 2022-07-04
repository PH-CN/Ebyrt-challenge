import React, { useContext } from 'react';
import ListContext from '../context/Context';

export default function Register() {
	const {
		handleChangeLogin,
		handleSubmitBtn,
		username,
		password,
		disabled,
		handleBackBtn
	} = useContext(ListContext);
	return (
		<>
			<header className='App'>
				<h1>Registration</h1>
			</header>
			<form className='App'>
				<button
					type='button'
					onClick={ handleBackBtn }
				>
					Back
				</button>
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
        Password:
					<input
						type="text" 
						name="password"
						value={ password }
						onChange={ handleChangeLogin }
					/>
				</label>
				<button 
					type="submit"
					name="submitBtn"
					disabled={ disabled }
					onClick={ handleSubmitBtn }
				>
        Submit
				</button>
			</form>
		</>
	);
}