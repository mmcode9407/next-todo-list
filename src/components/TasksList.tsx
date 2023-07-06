import Image from 'next/image';
import { TasksContext } from '@/context/TasksContext';
import React, { useContext } from 'react';
import TaskItem from './TaskItem';

export default function TasksList() {
	const { state: tasks } = useContext(TasksContext);

	const areTasks = (): boolean => (tasks.length > 0 ? true : false);

	return (
		<>
			{areTasks() ? (
				<ul className='flex flex-col gap-9'>
					{tasks.map((task, index) => (
						<TaskItem {...task} index={index} key={index} />
					))}
				</ul>
			) : (
				<div className='flex flex-col justify-center items-center gap-6 mt-8'>
					<Image
						src='/assets/images/clipboard.png'
						alt='clipboard icon'
						width={56}
						height={56}
					/>
					<p className='text-gray-300 font-bold text-3xl text-center'>
						You don't have registered tasks yet
					</p>
					<p className='text-gray-300 text-3xl text-center'>
						Create tasks and organize your to-do items
					</p>
				</div>
			)}
		</>
	);
}
