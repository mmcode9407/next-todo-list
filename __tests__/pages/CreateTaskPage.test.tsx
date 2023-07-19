import CreateTaskPage from '@/app/create-task/page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('CreateTaskPage', () => {
	xit('should render Form component', () => {
		render(<CreateTaskPage />);

		expect(screen.getByTestId('form-component')).toBeInTheDocument();
	});
});
