import React from 'react';
import TaskItem from '@/components/TaskItem';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TasksContextProvider from '@/context/TasksContext';
import TasksList from '@/components/TasksList';
import Form from '@/components/Form';

describe('TaskItem', () => {
	it('should render task text with two buttons', () => {
		render(<TaskItem name='New task' isDone={false} index={1} />);
		const checkBtn = screen.getByLabelText('check button');
		const deleteBtn = screen.getByLabelText('delete button');
		const taskText = screen.getByText('New task');

		expect(checkBtn).toBeInTheDocument();
		expect(taskText).toBeInTheDocument();
		expect(deleteBtn).toBeInTheDocument();
	});

	it('should line-through task text if user click on check button', async () => {
		render(
			<TasksContextProvider>
				<Form />
				<TasksList />
			</TasksContextProvider>
		);

		const input = screen.getByRole('textbox');
		const button = screen.getByLabelText('add task button');

		await userEvent.type(input, 'New task');
		await userEvent.click(button);

		const checkBtn = await waitFor(() => screen.getByLabelText('check button'));
		const task = await waitFor(() => screen.getByText('New task'));
		await userEvent.click(checkBtn);

		expect(task).toHaveClass('line-through');
	});

	it('should remove task', async () => {
		render(
			<TasksContextProvider>
				<Form />
				<TasksList />
			</TasksContextProvider>
		);

		const input = screen.getByRole('textbox');
		const button = screen.getByLabelText('add task button');

		await userEvent.type(input, 'New task');
		await userEvent.click(button);

		const deleteBtn = await waitFor(() =>
			screen.getByLabelText('delete button')
		);
		const task = await waitFor(() => screen.getByText('New task'));
		await userEvent.click(deleteBtn);

		expect(task).not.toBeInTheDocument();
	});
});
