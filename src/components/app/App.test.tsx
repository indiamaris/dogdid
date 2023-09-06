/** @format */

import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';



test('d-testando o teste', () => {
	const { getByText } = render(<App />);
	expect(getByText('Dog Log')).toBeInTheDocument();
});

