/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import App from './components/app/App';

import NewPack from './pages/newPack/newPackPage';
import Events from './pages/events/events';
import SignIn from './pages/signin/signIn';
import ErrorPage from './pages/errorPage/errorPage';
import UserPage from './pages/userPage/userPage';
import PackPage from './pages/login/packPage/packPage';

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
					path='userpage'
					element={<UserPage />}
				/>

				{/* <Route
						path='userpage/pack/1'
						element={<PackUm />}>
						<Route
							path='userpage/pack/1/adddogs'
							element={<AddDogs />}
						/>

						<Route
							path='userpage/pack/1/events'
							element={<Events />}
						/>
					</Route>
				</Route> */}
				<Route
					path='userpage/newpack'
					element={<NewPack />}
				/>

				<Route
					path='packpage/:id'
					element={<PackPage />}
				/>

				<Route
					path='/events'
					element={<Events />}
				/>
			</Routes>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

