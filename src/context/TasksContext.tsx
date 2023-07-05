'use client';

import React, { createContext, Dispatch, useReducer } from 'react';

interface Task {
	name: string;
	isDone: boolean;
}

type ActionType = {
	type: string;
	payload?: string;
	id: number;
};

const initialState: Task[] = [
	{ name: 'Wyrzucić śmieci', isDone: false },
	{ name: 'Zrobić zakupy', isDone: true },
	{ name: 'Wyjść z psem', isDone: false },
];

const reducer = (state: Task[], action: ActionType) => {
	switch (action.type) {
		case 'TOGGLE_TODO':
			const { id } = action;
			const updatedState = [...state];
			updatedState[id] = {
				...updatedState[id],
				isDone: !updatedState[id].isDone,
			};
			return updatedState;
		case 'DELETE_TASK':
			const newState = state.filter((item, index) => index !== action.id);
			return newState;
		default:
			return state;
	}
};

export const TasksContext = createContext<{
	state: Task[];
	dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export default function TasksContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<TasksContext.Provider value={{ state, dispatch }}>
			{children}
		</TasksContext.Provider>
	);
}
