/** @format */

import BlockBtn from '../../components/btn/blockBtn';
import Btn from '../../components/btn/btn';
import CreateNewPack from '../../components/createNewPack/createNewPack';
import PageLayout from '../../components/pageLayout/pageLayout';
import BlockContainer from '../../assets/slytlesBlocks/BlockContainer';

// interface Props {
// 	children: string;
// 	pageName: string;
// 	description: string;
// 	onClick?: MouseEventHandler<HTMLButtonElement>;
// }
const handleClick = (event: MouseEvent) => console.log({ event }, 'clicked');
const pageName = 'New Pack';
const description = 'Name for new pack';
const NewPack = () => {
	return (
		<BlockContainer>
			<PageLayout
				pageName={pageName}
				children={''}
				pageDescription={description}
			/>
			<CreateNewPack
				children={''}
				pageName={pageName}
				pageDescription={description}
			/>

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
		</BlockContainer>
	);
};

export default NewPack;

