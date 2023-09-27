/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import App from './components/app/App';

import PackUm from './pages/pack/packUm';
import AddDogs from './components/addDogs/addDogsToNewPack';
import NewPack from './pages/newPack/newPack';
import Events from './pages/events/events';
import SignIn from './pages/signin/signIn';
import ErrorPage from './pages/errorPage/errorPage';
import UserPage from './pages/userPage/userPage';
import { children } from 'react';

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
					errorElement={<ErrorPage />}
					element={<SignIn />}
				/>

				<Route
					path='login'
					element={<Login />}
				/>

				<Route
					path='userpage/:useremail'
					element={<UserPage />}>
					<Route
						path='userpage/:useremail/newpack'
						element={<NewPack />}
					/>
					<Route
						path='userpage/:useremail/pack/1'
						element={<PackUm />}>
						<Route
							path='userpage/:useremail/pack/1/adddogs'
							element={<AddDogs />}
						/>

						<Route
							path='userpage/:useremail/pack/1/events'
							element={<Events />}
						/>
					</Route>
				</Route>
			</Routes>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

