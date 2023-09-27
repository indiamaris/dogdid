/** @format */

interface Props {
	pageName: string;
	children: string;

}

const PageDescription = ({ children, pageName }: Props) => {
	const alignment =
		pageName.toLowerCase() !== 'dog log' ? 'text-start fs-2' : 'text-muted';

	return <p className={` display-6 ${alignment} `}>{children}</p>;
};
export default PageDescription;




