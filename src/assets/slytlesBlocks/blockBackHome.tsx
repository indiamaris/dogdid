import { ReactNode } from "react";

/** @format */
interface Props {
	children: ReactNode;
}
const BlockHome = ({ children }: Props) => {
	return (
		<div className="d-flex mt-3 ms-3">
		
			{children}
		</div>
	);
};

export default BlockHome;

