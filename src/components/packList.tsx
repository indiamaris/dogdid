/** @format */


import BlockBtn from './btn/blockBtn';
import Btn from './btn/btn';
import { Pack, PackResponse } from '../interfaces/interfaces';
import usePacks from '../hooks/usePacks';

const PackList = () => {
	const { data: packResponse, error, isLoading } = usePacks();
	if (isLoading) return <p>Loading</p>;
	if (error) return <p>{error.message}</p>;

	// const packs = packsResponse ? packsResponse.packs : [];
	return (
		<BlockBtn>
			{packResponse.packs.map((pack: Pack) => (
				<Btn
					key={pack.id}
					to={`/packpage/${pack.id}`}>
					{pack.name}
				</Btn>
			))}
		</BlockBtn>
	);
};

export default PackList;

