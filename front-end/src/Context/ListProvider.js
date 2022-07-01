import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListContext from './Context';

function ListProvider({ children }) {
  
	const value = {};

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