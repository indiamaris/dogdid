/** @format */

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './footer';


test('display strings', () => {
	const { getByText } = render(<Footer companyName={'ba'} />);
	expect(getByText('ba')).toBeInTheDocument();
});

// aqui da pra usar get by role para o footer 



