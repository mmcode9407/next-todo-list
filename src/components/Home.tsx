'use client';

import { TasksContext } from '@/context/TasksContext';
import React, { useContext } from 'react';
import TasksList from './TasksList';

export default function Home() {
	const { state: tasks } = useContext(TasksContext);

	const isDoneNumber = Object.values(tasks).filter(
		(item) => item.isDone === true
	).length;

	return (
		<section>
			<div className='wrapper flex flex-col gap-9'>
				<div className='flex justify-between my-4'>
					<p className='text-blue text-2xl font-bold'>
						Created{' '}
						<span className='bg-gray-400 text-gray-200 rounded-full px-3 py-1 text-xl'>
							{tasks.length}
						</span>
					</p>
					<p className='text-purple text-2xl font-bold'>
						Done{' '}
						<span className='bg-gray-400 text-gray-200 rounded-full px-3 py-1 text-xl'>
							{`${isDoneNumber}/${tasks.length}`}
						</span>
					</p>
				</div>
				<TasksList />
			</div>
		</section>
	);
}
