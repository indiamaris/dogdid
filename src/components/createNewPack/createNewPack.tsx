/** @format */

import BlockBtn from '../btn/blockBtn';
import Btn from '../btn/btn';

import BlockContainer from '../../slytlesBlocks/BlockContainer';
import PageLayout from '../pageLayout';
interface Props {
	children: string;
	pageName: string;
	description: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
const handleClick = (event: MouseEvent) => console.log({ event }, 'clicked');
const CreateNewPack = ({ pageName, description }: Props) => (
	<BlockContainer>
		<form>
			<PageLayout
				pageName={pageName}
				children={''}
				pageDescription={description}
			/>

			<BlockFormControl>
				<input
					type='text'
					className='form-control'
					id='packname'
					placeholder='text'
				/>
				<label htmlFor=''>New pack name</label>
			</BlockFormControl>

			<BlockBtn>
				<Btn
					type='submit'
					onClick={handleClick}>
					BACK
				</Btn>
				<Btn
					type='submit'
					onClick={handleClick}>
					NEXT
				</Btn>
			</BlockBtn>
		</form>
	</BlockContainer>
);

export default CreateNewPack;

