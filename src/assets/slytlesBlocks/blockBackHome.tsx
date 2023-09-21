import { ReactNode } from "react";

/** @format */
interface Props {
	children: ReactNode;
}
const BlockHome = ({ children }: Props) => {
	return (
		<div className="d-flex pb-2">
		
			{children}
		</div>
	);
};

export default BlockHome;

