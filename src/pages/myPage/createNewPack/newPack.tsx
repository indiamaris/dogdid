/** @format */
import BlockContainer from '../../../slytlesBlocks/BlockContainer';
import CreateNewPack from '../../createNewPack/createNewPack';

// interface Props {
// 	children: string;
// 	pageName: string;
// 	description: string;
// 	onClick?: MouseEventHandler<HTMLButtonElement>;
// }

const NewPack = () => {
	return (
		<BlockContainer>
			<CreateNewPack
				children={''}
				pageName={'New Pack'}
				description={'Name for new pack'}
			/>
		</BlockContainer>
	);
};

export default NewPack;

