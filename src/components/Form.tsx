'use client';

import { TasksContext } from '@/context/TasksContext';
import useStorage from '@/hooks/useStorage';
import Image from 'next/image';
import { useState, useContext, useEffect } from 'react';

export default function Form() {
	const [task, setTask] = useState<string>('');
	const { state: tasks, dispatch } = useContext(TasksContext);
	const [error, setError] = useState<string>('');
	const [isAdded, setIsAdded] = useState<boolean>(false);
	const [saveToLS, getFromLS] = useStorage('tasks');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		setTask(value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (task !== '') {
			dispatch({ type: 'ADD_TASK', payload: task });
			setTask('');
			setIsAdded(true);
		} else {
			setError('You cannot add an empty task!');
		}
	};

	useEffect(() => {
		setTimeout(() => {
			setIsAdded(false);
		}, 1500);
	}, [isAdded]);

	useEffect(() => {
		saveToLS(tasks);
	}, [tasks]);

	return (
		<section data-testid='form-component'>
			<div className='wrapper'>
				<form
					className=' flex flex-wrap justify-center sm:flex-nowrap gap-3 '
					onSubmit={handleSubmit}>
					<input
						type='text'
						name='task'
						value={task}
						onChange={handleChange}
						onFocus={() => setError('')}
						placeholder='Add a new task'
						className='grow p-6 rounded-xl bg-gray-500 text-gray-100 text-2xl placeholder:text-gray-300 border border-gray-700 outline-none focus-visible:border-purple-dark '
					/>
					<button
						className='flex items-center shrink gap-3 p-6 rounded-xl bg-blue-dark text-xl text-gray-100 uppercase hover:bg-blue cursor-pointer transition-colors duration-300'
						aria-label='add task button'>
						Add{' '}
						<Image
							src='/assets/images/plus.png'
							alt='plus in circle icon'
							width={16}
							height={16}
						/>
					</button>
				</form>
				<div>
					<p className='text-2xl text-danger text-center mt-8'>{error}</p>
				</div>
				<div
					className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 ${
						isAdded ? 'block' : 'hidden'
					} text-2xl sm:text-4xl text-gray-100 bg-green-600 rounded-xl text-center`}>
					<p>Your task has been added to the list </p>
				</div>
			</div>
		</section>
	);
}
