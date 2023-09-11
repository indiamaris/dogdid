/** @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import App from './components/app/App';
import SigIn from './pages/signin/signIn';
import MyPage from './pages/myPage/myPage';
import PackUm from './pages/pack/packUm';
import NewPack from './pages/newPack/newPack';

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

				<Route
					path='mypage'
					element={<MyPage />}
				/>
				<Route
					path='mypage/newpack'
					element={<NewPack />}
				/>

				<Route />

				<Route
					path='mypage/pack/1'
					element={<PackUm />}
				/>
			</Routes>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);



