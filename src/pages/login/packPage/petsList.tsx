/** @format */

import { useState, useEffect, InputHTMLAttributes } from 'react';
import { Pet } from '../../../interfaces/interfaces';
import BlockBtn from '../../../components/btn/blockBtn';
import { getPetsPack } from '../../../service/userService';
import BlockDogs from '../../../assets/slytlesBlocks/blockDogList';
import BlockDogList from '../../../assets/slytlesBlocks/blockDogList';
import Btn from '../../../components/btn/btn';
import BtnSm from '../../../components/btn/btn_sm';
import BlockCheckInput from '../../../assets/slytlesBlocks/blockCheckInput';
import Input from '../../../components/inputs/input';
import { UseFormRegister } from 'react-hook-form';

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
interface PetListProps extends InputHTMLAttributes<HTMLInputElement> {
	register: UseFormRegister<PetInPack>;
	id: string;
}
const PetList = ({ id, register }: PetListProps) => {
	const [PetsResponse, setPetsResponse] = useState<PetResponse>();
	const [check, setCheck] = useState();
	useEffect(() => {
		getPetsPack(id).then(setPetsResponse);
	}, []);

	const pets = PetsResponse ? PetsResponse.pets : [];

	// console.log(PetsResponse);
	return (
		<>
			<BlockDogList>
				{pets.map((pet) => {
					return (
						<div
							key={pet.id}
							className='fs-4 p-2 m-1 ms-3'>
							<Input
								type='checkbox'
								checked={check}
								onChange={(e) => setCheck(e.target.checked)}
								id='flexCheckDefault'
								placeholder={pet.name}
								label={pet.name}
								{...register('checkbox')}
								value='pet.id'
							/>
						</div>
					);
				})}
			</BlockDogList>
		</>
	);
};

export default PetList;

