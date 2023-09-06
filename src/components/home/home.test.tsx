/** @format */

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './home';

test('display strings', () => {
	const { getByText } = render(<Home />);
	expect(getByText('Dog Log')).toBeInTheDocument();
});

