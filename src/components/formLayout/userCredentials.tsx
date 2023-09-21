/** @format */

import BlockCheckInput from '../../assets/slytlesBlocks/blockCheckInput';
import BlockFormControl from '../../assets/slytlesBlocks/blockFormControl';
import Input from '../inputs/input';

import { UseFormRegister } from 'react-hook-form';
import { UserCredentials } from '../../interfaces/interfaces';

export interface UserCredentialsProps {
	register: UseFormRegister<UserCredentials>;
}

const LoginCredentials = ({ register }: UserCredentialsProps) => {
	return (
		<>
			<BlockFormControl>
				<Input
					type='email'
					className='form-control'
					id='floatingInputEmail'
					placeholder='name@example.com'
					label='	Email address'
					{...register('email')}
				/>
			</BlockFormControl>

			<BlockFormControl>
				<Input
					type='password'
					className='form-control'
					id='floatingInputPassword'
					label='password'
					placeholder='Password'
					{...register('password')}
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
		</>
	);
};

export default LoginCredentials;


