/** @format */

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageDescription from './pageDescription';

test('renders a page name', () => {
	const { getByText } = render(
		<PageDescription pageDescription={'wwwwwwwwww'} />
	);
	expect(getByText('wwwwwwwwww')).toBeInTheDocument();
	expect(getByText('wwwwwwwwww').tagName).toBe('P');
});

