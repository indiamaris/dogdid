/** @format */

import { useState, useEffect } from 'react';
import { Pet } from '../../../interfaces/interfaces';
import BlockBtn from '../../../components/btn/blockBtn';
import { getPetsPack } from '../../../service/userService';

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
			<div className='lists d-flex flex-column justify-content-end '>
				<div className='col-12  d-flex justify-content-center '>
					<button
						type='button'
						disabled={false}
						className='col-8 btn btn-lg btn-warning '>
						Click here to select <strong>ALL</strong> dogs in that
						pack
					</button>
				</div>

				<div className='display-8 d-flex justify-content-center mt-5'>
					<p>
						Or click on the dogs name above to choose{' '}
						<strong>one by one</strong> !
					</p>
				</div>
				<div className='col-12   d-flex justify-content-center  flex-wrap mt-4'>
					{pets.map((pet) => {
						return (
							<button
								type='button'
								className='col-2 btn btn-lg btn-outline-primary m-3'>
								{pet.name}
							</button>
						);
					})}
				</div>
			</div>
			<BlockBtn>
				{/* {Pets.map((Pet: Pet) => (
					<Btn
						key={Pet.id}
						to={`Pet/${Pet.id}`}>
						{Pet.name}
					</Btn>
				))} */}
			</BlockBtn>
		</>
	);
};

export default PetList;

