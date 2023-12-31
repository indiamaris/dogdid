/** @format */

import BlockContainer from '../../assets/slytlesBlocks/BlockContainer';

import BlockFormControl from '../../assets/slytlesBlocks/blockFormControl';
import Input from '../inputs/input';
interface Props {
	children: Element;
	pageName: string;
	description: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CreateNewPack = () => (
	<BlockContainer>
		<form>
			<BlockFormControl>
				<Input
					type='text'
					className='form-control'
					id='packname'
					placeholder='text'
					label={'New pack name'}
				/>
			</BlockFormControl>
		</form>
	</BlockContainer>
);

export default CreateNewPack;

