/** @format */

import Btn from '../../components/btn/btn';
import Heading from '../../components/heading/heading';

import BlockHeading from '../../slytlesBlocks/blockHeading';
import BlockHome from '../../slytlesBlocks/BlockContainer';
import PageDescription from '../../components/heading/pageDescription/pageDescription';
import BlockFormControl from './bloclFormControl/blockFormControl';
import BlockCheckInput from './blockCheckInput';
import BlockBtn from '../../components/btn/blockBtn';

const pageName = 'Login';

const handleClick = (event: MouseEvent): void =>
	console.log({ event }, 'clicked');

const Login = () => (
	<>
		<BlockHome>
			<BlockHeading>
				<Heading pageName={pageName} />
			</BlockHeading>

			<form>
				<PageDescription
					children='Please Login'
					pageName={pageName}></PageDescription>

				<BlockFormControl>
					<input
						type='email'
						className='form-control'
						id='floatingInput'
						placeholder='name@example.com'
					/>
					<label htmlFor='floatingInput mb-5'>Email address</label>
				</BlockFormControl>

				<BlockFormControl>
					<input
						type='password'
						className='form-control'
						id='floatingPassword'
						placeholder='Password'
					/>
					<label htmlFor='floatingPassword'>Password</label>
				</BlockFormControl>

				<BlockCheckInput>
					<input
						type='checkbox'
						value='remember-me'
						id='flexCheckDefault'
					/>

					<label htmlFor='flexCheckDefault'>Remember me</label>
				</BlockCheckInput>
				<BlockBtn>
					<Btn
						type='submit'
						onClick={handleClick}>
						Submit
					</Btn>
				</BlockBtn>
			</form>
		</BlockHome>
	</>
);

export default Login;

