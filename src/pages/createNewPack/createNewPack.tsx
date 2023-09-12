/** @format */

import BlockBtn from '../../components/btn/blockBtn';
import Btn from '../../components/btn/btn';
import Heading from '../../components/heading/heading';
import PageDescription from '../../components/pageDescription/pageDescription';
import BlockDescription from '../../slytlesBlocks/blockDescription';
import BlockFormControl from '../../slytlesBlocks/blockFormControl';
import BlockHeading from '../../slytlesBlocks/blockHeading';
import BlockContainer from '../../slytlesBlocks/BlockContainer';
import PageLayout from '../../components/pageLayout';
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

