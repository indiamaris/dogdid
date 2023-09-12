/** @format */

import BlockBtn from './btn/blockBtn';
import Btn from './btn/btn';
const myPacks = [
	{ name: 'Destroyers', id: 1 },
	{ name: 'CalmPets', id: 2 },
	{ name: 'WedontEatSlips', id: 3 },
];
const PackList = () => {
	return (
		<BlockBtn>
			{myPacks.map((pack) => (
				<Btn
					key={pack.id}
					to={`pack/${pack.id}`}>
					{pack.name}{' '}
				</Btn>
			))}
		</BlockBtn>
	);
};

export default PackList;

