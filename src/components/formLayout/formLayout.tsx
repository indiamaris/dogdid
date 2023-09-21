/** @format */

import BlockContainer from '../../assets/slytlesBlocks/BlockContainer';
import BlockDescription from '../../assets/slytlesBlocks/blockDescription';
import BlockHeading from '../../assets/slytlesBlocks/blockHeading';
import BlockBtn from '../btn/blockBtn';
import Btn from '../btn/btn';
import Heading from '../pageLayout/heading/heading';
import PageDescription from '../pageLayout/pageDescription/pageDescription';
import { FormEventHandler, ReactNode } from 'react';
import Back from '../backOpt/back';
import BlockBack from '../../assets/slytlesBlocks/blockBack';
import PageLayout from '../pageLayout/pageLayout';

interface Props {
	pageName: string;
	children: ReactNode;
	onSubmit: FormEventHandler<HTMLFormElement>;
}

const FormLayout = ({ pageName, children, onSubmit }: Props) => (
	<>
		<BlockContainer>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					onSubmit(event);
				}}>
				{children}
				<BlockBtn>
					<Btn type='submit'>{pageName}</Btn>
				</BlockBtn>
			</form>
		</BlockContainer>
	</>
);

export default FormLayout;

