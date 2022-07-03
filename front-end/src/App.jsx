import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ListProvider from '../src/context/ListProvider';
import Login from './pages/Login';
import List from './pages/List';
import Register from './pages/Register';

function App() {
	return (
		<ListProvider>
			<Routes>
				<Route exact path='/' element={ <Login /> } />
				<Route exact path='/list' element={ <List /> } />
				<Route exact path='/register' element={ <Register /> } />
			</Routes>
		</ListProvider>
	);
}

export default App;
