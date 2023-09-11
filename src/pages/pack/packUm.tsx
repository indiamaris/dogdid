/** @format */

import BlockBtn from '../../components/btn/blockBtn';
import Btn from '../../components/btn/btn';
import Heading from '../../components/heading/heading';
import BlockContainer from '../../slytlesBlocks/BlockContainer';
import BlockHeading from '../../slytlesBlocks/blockHeading';
const pageName = 'teste pack';

const myDogs = [
	{ name: 'Destroyers', id: 1 },
	{ name: 'CalmPets', id: 2 },
	{ name: 'WedontEatSlips', id: 3 },
	{ name: 'Destroyers', id: 1 },
	{ name: 'CalmPets', id: 2 },
	{ name: 'WedontEatSlips', id: 3 },
	{ name: 'Destroyers', id: 1 },
	{ name: 'CalmPets', id: 2 },
	{ name: 'WedontEatSlips', id: 3 },
	{ name: 'Destroyers', id: 1 },
	{ name: 'CalmPets', id: 2 },
	{ name: 'WedontEatSlips', id: 3 },
	{ name: 'Destroyers', id: 1 },
	{ name: 'CalmPets', id: 2 },
	{ name: 'WedontEatSlips', id: 3 },
	{ name: 'Destroyers', id: 1 },
	{ name: 'CalmPets', id: 2 },
	{ name: 'WedontEatSlips', id: 3 },
	{ name: 'Destroyers', id: 1 },
	{ name: 'CalmPets', id: 2 },
	{ name: 'WedontEatSlips', id: 3 },
	{ name: 'Destroyers', id: 1 },
	{ name: 'CalmPets', id: 2 },
	{ name: 'WedontEatSlips', id: 3 },
	{ name: 'Destroyers', id: 1 },
	{ name: 'CalmPets', id: 2 },
	{ name: 'WedontEatSlips', id: 3 },
	{ name: 'Destroyers', id: 1 },
	{ name: 'CalmPets', id: 2 },
	{ name: 'WedontEatSlips', id: 3 },
	{ name: 'Destroyers', id: 1 },
	{ name: 'CalmPets', id: 2 },
	{ name: 'WedontEatSlips', id: 3 },
];
const PackUm = () => {
	return (
		<div>
			<BlockContainer>
				<BlockHeading>
					<Heading pageName={pageName} />
				</BlockHeading>
				<BlockBtn>
					<Btn to={`pack/`}>Select All </Btn>
					{myDogs.map((pack) => (
						<Btn to={`pack/${pack.id}`}>{pack.name} </Btn>
					))}
				</BlockBtn>
			</BlockContainer>
		</div>
	);
};

export default PackUm;


