/** @format */

import BlockBtn from '../../components/btn/blockBtn';
import Btn from '../../components/btn/btn';
import Heading from '../../components/heading/heading';
import PageDescription from '../../components/pageDescription/pageDescription';
import BlockDescription from '../../slytlesBlocks/blockDescription';
import BlockFormControl from '../../slytlesBlocks/blockFormControl';
import BlockHeading from '../../slytlesBlocks/blockHeading';
import BlockContainer from '../../slytlesBlocks/BlockContainer';
interface Props {
	children: string;
	pageName: string;
	description: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
const handleClick = (event: MouseEvent) => console.log({ event }, 'clicked');
const PackCreator = ({ pageName, description }: Props) => (
	<BlockContainer>
		<BlockHeading>
			<Heading pageName={pageName} />
		</BlockHeading>
		<BlockDescription pageName={pageName}>
			<form>
				<PageDescription
					children={description}
					pageName={pageName}></PageDescription>

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
						NEXT
					</Btn>
				</BlockBtn>
			</form>
		</BlockDescription>
	</BlockContainer>
);

export default PackCreator;

