interface Task {
	name: string;
	isDone: boolean;
}

const useStorage = (name: string) => {
	const setItem = (data: Task[]) => {
		localStorage.setItem(name, JSON.stringify(data));
	};

	const getItem = (): Task[] | [] => {
		return JSON.parse(localStorage.getItem(name) || '""');
	};

	return [setItem, getItem] as const;
};

export default useStorage;
