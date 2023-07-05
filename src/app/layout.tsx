import Nav from '@/components/Nav';
import TasksContextProvider from '@/context/TasksContext';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Tasks Manager',
	description: 'Application for tasks management',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-gray-600`}>
				<main>
					<Nav />
					<TasksContextProvider>{children}</TasksContextProvider>
				</main>
			</body>
		</html>
	);
}
