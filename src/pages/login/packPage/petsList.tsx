/** @format */

import { useState, useEffect } from 'react';
import { Pet } from '../../../interfaces/interfaces';
import BlockBtn from '../../../components/btn/blockBtn';
import { getPetsPack } from '../../../service/userService';
import BlockDogs from '../../../assets/slytlesBlocks/blockDogList';
import BlockDogList from '../../../assets/slytlesBlocks/blockDogList';
import Btn from '../../../components/btn/btn';
import BtnSm from '../../../components/btn/btn_sm';

interface PetInPack extends Pet {
	createdAt: string;
}
interface PetResponse {
	pets: PetInPack[];
	pagination: {
		page: number;
		pageSize: number;
		total: number;
	};
}
interface PetListProps {
	id: string;
}
const PetList = ({ id }: PetListProps) => {
	const [PetsResponse, setPetsResponse] = useState<PetResponse>();

	useEffect(() => {
		getPetsPack(id).then(setPetsResponse);
	}, []);

	const pets = PetsResponse ? PetsResponse.pets : [];

	console.log(PetsResponse);
	return (
		<>
			<BlockDogList>
			

				{pets.map((pet) => {
					return <BtnSm type='button'> {pet.name}</BtnSm>;
				})}
			</BlockDogList>

		</>
	);
};

export default PetList;





