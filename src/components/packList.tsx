/** @format */

import { useEffect, useState } from 'react';
import { getPacks } from '../service/userService';
import BlockBtn from './btn/blockBtn';
import Btn from './btn/btn';

interface Pack {
	name: string;
	id: number;
}
interface PackResponse {
	packs: Pack[];
	pagination: {
		page: number;
		pageSize: number;
		total: 0;
	};
}

const PackList = () => {
	const [packsResponse, setPacksResponse] = useState<PackResponse>();

	useEffect(() => {
		getPacks().then(setPacksResponse);
	}, []);

	const packs = packsResponse ? packsResponse.packs : [];

	console.log(packsResponse);
	return (
		<BlockBtn>
			{packs.map((pack: Pack) => (
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

