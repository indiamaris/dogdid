/** @format */

import BlockCheckInput from '../slytlesBlocks/blockCheckInput';
import BlockFormControl from '../slytlesBlocks/blockFormControl';
import Input from '../inputs/input';
import { useState } from 'react';
// import BlockBtn from '../btn/blockBtn';
// import Btn from '../btn/btn';
import SetUser from '../../hooks/setUserBasic';
import UserCredentials from './userCredentialsInput';

interface UserCredentialsValue {
	name: string;
	email: string;
	password: string;
}

interface UserCredentialsProps {
	onChange?: (value: UserCredentialsValue) => void;
}

const UserCredentials = ({ onChange }: UserCredentialsProps) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleChange = (e: any) => {
		const name = e.target.id;
		const value = e.target.value;
		switch (name) {
			//  se  'name'  que vem de  'e.target.name'for fullname  entao a props fullname sera preenchida?
			case 'floatingInputName':
				setName(value);
				break;
			case 'floatingInputEmail':
				setEmail(value);
				break;

			case 'floatingInputPassword':
				console.log(password);
				setPassword(value);
				break;
		}
		onChange ? ({
			name,
			password,
			email
		})
		// e.preventDefault();
	};
	// const handleSubmit = (name: string, email: string, password: string) => {
	// 	SetUser(name, email, password);
	// 	// console.log(name, email, password);
	// };

	return (
		<>
			<BlockFormControl>
				<Input
					type='text'
					className='form-control'
					id='floatingInputName'
					placeholder='name'
					label='	Name'
					value={name}
					onChange={handleChange}
				/>
			</BlockFormControl>
			<BlockFormControl>
				<Input
					type='email'
					className='form-control'
					id='floatingInputEmail'
					placeholder='name@example.com'
					label='	Email address'
					value={email}
					onChange={handleChange}
				/>
			</BlockFormControl>

			<BlockFormControl>
				<Input
					type='password'
					className='form-control'
					id='floatingInputPassword'
					placeholder='Password'
					label='Password'
					value={password}
					onChange={handleChange}
				/>
			</BlockFormControl>

			<BlockCheckInput>
				<Input
					type='checkbox'
					className='naosei'
					id='flexCheckDefault'
					placeholder='rememberme'
					label='	Remember me'
				/>
			</BlockCheckInput>
			{/* <BlockBtn>
				<Btn
					type='submit'
					onClick={() => handleSubmit(name, email, password)}>
					{'login'}
				</Btn>
			</BlockBtn> */}
		</>
	);
};

export default UserCredentials;

