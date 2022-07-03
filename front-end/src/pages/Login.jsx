import React, { useContext } from 'react';
import ListContext from '../context/Context';

export default function Login() {
	const {
		handleChangeLogin,
		username,
		password,
		disabled,
		navigate
	} = useContext(ListContext);
	return (
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
				// onClick={ handleSubmitBtn }
			>
        Submit
			</button>
			<button 
				type='button'
				onClick={ () => navigate('/register') }
			>
        Register
			</button>
		</form>
	);
}