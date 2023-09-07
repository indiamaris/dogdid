/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import App from './components/app/App';
import SigIn from './pages/signin/SigIn';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='signin'
					element={<SigIn />}
				/>

				<Route
					path='login'
					element={<Login />}
				/>
			</Routes>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);


