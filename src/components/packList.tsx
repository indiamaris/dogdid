/** @format */

import { useEffect, useState } from 'react';
import { getAllPacks } from '../service/userService';
import BlockBtn from './btn/blockBtn';
import Btn from './btn/btn';

interface Pack {
	name: string;
	id: number;
}

const PackList = () => {
	const [allPacks, setAllPacks] = useState<Pack[]>([]);
	useEffect(() => {
		getAllPacks().then(setAllPacks);
	}, []);

	return (
		<BlockBtn>
			<p>a list here</p>
			{/* <p>{allPacks}</p> */}
			{/* {allPacks.map((pack: Pack) => (
				<Btn
					key={pack.id}
					to={`pack/${pack.id}`}>
					{pack.name}
					console.log(allPacks)
				</Btn>
			))} */}
		</BlockBtn>
	);
};

export default PackList;

