import Image from 'next/image';

export default function EmptyTasksList() {
	return (
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
	);
}
