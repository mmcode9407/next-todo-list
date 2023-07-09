import { TasksContext } from '@/context/TasksContext';
import React, { useContext } from 'react';

type Props = {
	name: string;
	isDone: boolean;
	index: number;
};

export default function TaskItem({ name, isDone, index }: Props) {
	const { dispatch } = useContext(TasksContext);

	const toggleTodo = (index: number) => {
		dispatch({ id: index, type: 'TOGGLE_TODO' });
	};

	const deleteTask = (index: number) => {
		dispatch({ type: 'DELETE_TASK', id: index });
	};

	return (
		<li
			className='flex p-6 justify-between items-center gap-6 bg-gray-500 rounded-xl'
			key={index}>
			<div
				className={`w-8 h-8 rounded-full shrink-0 cursor-pointer transition-colors duration-300  
						${
							isDone
								? 'text-gray-100 text-xl bg-purple-dark hover:bg-purple flex justify-center items-center'
								: 'hover:border-blue-dark border-blue border-solid border'
						}
						`}
				onClick={() => {
					toggleTodo(index);
				}}>
				{isDone && <>&#10003;</>}
			</div>
			<p
				className={`text-gray-100 text-2xl ${
					isDone && 'line-through text-gray-300'
				}`}>
				{name}
			</p>
			<button
				className='w-[24px] h-[24px]shrink-0 text-3xl text-gray-300 hover:text-danger hover:bg-gray-400 transition-colors duration-300 rounded-lg'
				onClick={() => {
					deleteTask(index);
				}}>
				&#10007;
			</button>
		</li>
	);
}
