'use client';
import { TasksContext } from '@/context/TasksContext';
import Image from 'next/image';
import { useState, useContext } from 'react';

export default function Form() {
	const [task, setTask] = useState<string>('');
	const { dispatch } = useContext(TasksContext);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		setTask(value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch({ type: 'ADD_TASK', payload: task });
		setTask('');
	};

	return (
		<section>
			<div className='wrapper'>
				<form
					className=' flex flex-wrap justify-center sm:flex-nowrap gap-3 '
					onSubmit={handleSubmit}>
					<input
						type='text'
						name='task'
						value={task}
						onChange={handleChange}
						placeholder='Add a new task'
						className='grow p-6 rounded-xl bg-gray-500 text-gray-100 text-2xl placeholder:text-gray-300 border border-gray-700 outline-none focus-visible:border-purple-dark '
					/>
					<button className='flex items-center shrink gap-3 p-6 rounded-xl bg-blue-dark text-xl text-gray-100 uppercase hover:bg-blue cursor-pointer transition-colors duration-300'>
						Add{' '}
						<Image
							src='/assets/images/plus.png'
							alt='plus in circle icon'
							width={16}
							height={16}
						/>
					</button>
				</form>
			</div>
		</section>
	);
}
