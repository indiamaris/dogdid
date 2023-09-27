/** @format */

import BlockContainer from '../../assets/slytlesBlocks/BlockContainer';
import BlockBtn from '../btn/blockBtn';
import Btn from '../btn/btn';
import { FormEventHandler, ReactNode } from 'react';

interface Props {
	pageName: string;
	children: ReactNode;
	onSubmit: FormEventHandler<HTMLFormElement>;
}

const FormLayout = ({ pageName, children, onSubmit }: Props) => (
	<>
		<BlockContainer>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit(e);
				}}>
				{children}
			</form>
		</BlockContainer>
		<BlockBtn>
			<Btn type='submit'>{pageName}</Btn>
		</BlockBtn>
	</>
);

export default FormLayout;

