import Form from '@/components/Form';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TasksContextProvider from '@/context/TasksContext';
import TasksList from '@/components/TasksList';

describe('Form', () => {
	it('should render input', () => {
		render(<Form />);
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should render button', () => {
		render(<Form />);
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should add task', async () => {
		render(
			<TasksContextProvider>
				<Form />
				<TasksList />
			</TasksContextProvider>
		);

		const input = screen.getByRole('textbox');
		const button = screen.getByRole('button');

		await userEvent.type(input, 'New task');
		await userEvent.click(button);

		const taskText = await waitFor(() => screen.getByText('New task'));
		const confirm = await waitFor(() =>
			screen.getByText('Your task has been added to the list')
		);

		expect(taskText).toBeInTheDocument();
		expect(confirm.parentElement).toHaveClass('block');
	});

	it('should display an error if user adds empty task', async () => {
		render(<Form />);
		const button = screen.getByRole('button');

		await userEvent.click(button);

		const textNode = await waitFor(() =>
			screen.getByText('You cannot add an empty task!')
		);

		expect(textNode).toBeInTheDocument();
	});
});
