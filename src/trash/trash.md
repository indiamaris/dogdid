/** @format */

import Btn from '../btn/btn';
import Heading from '../heading/heading';

import BlockHeading from '../../slytlesBlocks/blockHeading';
import BlockHome from '../../slytlesBlocks/BlockContainer';
import PageDescription from '../heading/pageDescription/pageDescription';
import BlockFormControl from '../../slytlesBlocks/blockFormControl';
import BlockCheckInput from '../../slytlesBlocks/blockCheckInput';
import BlockBtn from '../btn/blockBtn';
import BlockDescription from '../../slytlesBlocks/blockDescription';
import BlockContainer from '../../slytlesBlocks/BlockContainer';

interface Props {
	children: string;
	pageName: string;
	description: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const handleClick = (event: MouseEvent) => console.log({ event }, 'clicked');

const CreateForm = ({ pageName, description }: Props) => {
	return (
		<>

					<form>
						<PageDescription
							children={description}
							pageName={pageName}></PageDescription>

						<BlockFormControl>
							<input
								type='email'
								className='form-control'
								id='floatingInput'
								placeholder='name@example.com'
							/>
							<label htmlFor='floatingInput mb-5'>
								Email address
							</label>
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

							<label htmlFor='flexCheckDefault'>
								Remember me
							</label>
						</BlockCheckInput>
						
					</form>
				
		</>
	);
};

export default CreateForm;

