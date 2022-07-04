import React from 'react';
import { useContext } from 'react';
import ListContext from '../context/Context';

export default function List() {
	const loggedUser = useContext(ListContext);
	
	return(
		<>
			{loggedUser &&
			<section>
				<h1>oi</h1>
			</section>}
		</>
	);
}