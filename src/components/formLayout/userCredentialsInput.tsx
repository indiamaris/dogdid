/** @format */

import BlockCheckInput from '../../slytlesBlocks/blockCheckInput';
import BlockFormControl from '../../slytlesBlocks/blockFormControl';
import Input from '../inputs/input';

const UserCredentials = () => {
	return (
		<>
			<BlockFormControl>
				<Input
					type='email'
					className='form-control'
					id='floatingInput'
					placeholder='name@example.com'
					label='	Email address'
				/>
			</BlockFormControl>

			<BlockFormControl>
				<Input
					type='password'
					className='form-control'
					id='floatingPassword'
					placeholder='Password'
					label='Password'
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

export default UserCredentials;

