/** @format */
import BlockContainer from '../../slytlesBlocks/BlockContainer';
import PackCreator from './packCreator';
interface Props {
	children: string;
	pageName: string;
	description: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const NewPack = () => {
	return (
		<BlockContainer>
			<PackCreator
				pageName={'New Pack'}
				description={'Details for a new pack:'}
				children={''}
			/>
		</BlockContainer>
	);
};

export default NewPack;

