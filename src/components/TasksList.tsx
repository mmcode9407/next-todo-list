import Image from 'next/image';
import { TasksContext } from '@/context/TasksContext';
import React, { useContext } from 'react';

export default function TasksList() {
	const { state: tasks, dispatch } = useContext(TasksContext);

	const areTasks = (): boolean => (tasks.length > 0 ? true : false);

	return (
		<>
			{areTasks() ? (
				<ul className='flex flex-col gap-9'>
					{tasks.map((task, index) => (
						<li
							className='flex p-6 justify-between items-center gap-6 bg-gray-500 rounded-xl'
							key={index}>
							<div
								className={`w-8 h-8 rounded-full shrink-0 cursor-pointer transition-colors duration-300  
						${
							task.isDone
								? 'text-gray-100 text-xl bg-purple-dark hover:bg-purple flex justify-center items-center'
								: 'hover:border-blue-dark border-blue border-solid border'
						}
						`}
								onClick={() => {
									dispatch({ id: index, type: 'TOGGLE_TODO' });
								}}>
								{task.isDone && <>&#10003;</>}
								<input className='hidden' type='checkbox' />
							</div>
							<p
								className={`text-gray-100 text-2xl ${
									task.isDone && 'line-through text-gray-300'
								}`}>
								{task.name}
							</p>
							<button className='w-[24px] h-[24px]shrink-0 text-3xl text-gray-300 hover:text-danger hover:bg-gray-400 transition-colors duration-300 rounded-lg'>
								&#10007;
							</button>
						</li>
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
