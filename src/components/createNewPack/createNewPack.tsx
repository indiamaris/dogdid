/** @format */

import { UseFormRegister } from 'react-hook-form';
import BlockContainer from '../../assets/slytlesBlocks/BlockContainer';

import BlockFormControl from '../../assets/slytlesBlocks/blockFormControl';
import { MouseEventHandler, FormEventHandler } from 'react';
import { PackCredentials } from '../../interfaces/interfaces';
import NewPackCredentials from '../formLayout/createNewPack';

interface Props {
	children: Element;
	pageName: string;
	description: string;
	register: UseFormRegister<PackCredentials>;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	onSubmit: FormEventHandler<HTMLFormElement>;
}

const CreateNewPack = ({ onSubmit, register }: Props) => (
	<BlockContainer>
		<form>
			<BlockFormControl>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						onSubmit(e);
					}}>
					<NewPackCredentials />
				</form>
			</BlockFormControl>
		</form>
	</BlockContainer>
);

export default CreateNewPack;

