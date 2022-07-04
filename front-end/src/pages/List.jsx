import React from 'react';
import { useContext } from 'react';
import ListContext from '../context/Context';

export default function List() {
	const { isLogged, task, handleTaskChange, handleTaskBtn } = useContext(ListContext);
	
	return(
		<>
			{isLogged &&
			<section className='App'>
				<label htmlFor="task-input">
					Type your task!
					<input 
						name="task-input"
						type="text"
						value={ task }
						onChange={ handleTaskChange }
					/>
					<button 
						type='button'
						name='task-btn'
						onClick={ handleTaskBtn }
					>
						Send
					</button>
				</label>
			</section>}
		</>
	);
}