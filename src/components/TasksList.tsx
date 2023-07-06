import { TasksContext } from '@/context/TasksContext';
import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import EmptyTasksList from './EmptyTasksList';

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
				<EmptyTasksList />
			)}
		</>
	);
}
