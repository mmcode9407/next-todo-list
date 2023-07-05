'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import BurgerButton from './BurgerButton';

export default function Nav() {
	const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false);

	const toggleDropdown = () => {
		setIsShowBurgerMenu(!isShowBurgerMenu);
	};

	const updateMedia = () => {
		window.innerWidth >= 768 && setIsShowBurgerMenu(false);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);

		return () => window.removeEventListener('resize', updateMedia);
	});

	return (
		<nav className=' bg-gray-700'>
			<div className='wrapper flex justify-between items-center p-4 relative'>
				<div className='flex items-center gap-5'>
					<Link href='/' className='shrink-0'>
						<Image
							src='/assets/images/rocket.png'
							alt='logo icon'
							width={22}
							height={36}
						/>
					</Link>
					<h1 className='text-4xl md:text-6xl font-black text-purple-dark'>
						<span className='text-blue'>Tasks</span> Manager
					</h1>
				</div>

				{/* Desktop navigation */}
				<div className='hidden md:flex gap-5 p-4 text-4xl text-purple-dark'>
					<Link
						href='/'
						className='hover:text-purple transition-colors duration-300'>
						Home
					</Link>
					<Link
						href='/create-task'
						className=' hover:text-purple transition-colors duration-300'>
						Create task!
					</Link>
				</div>

				{/* {Mobile navigation} */}
				<BurgerButton isShow={isShowBurgerMenu} onClick={toggleDropdown} />
				{isShowBurgerMenu && (
					<div className='absolute right-0 top-full w-1/3 p-5 rounded-b-lg bg-gray-700 min-w-[210px] flex flex-col gap-2 justify-end items-end text-4xl text-purple-dark'>
						<Link
							href='/'
							className='hover:text-purple transition-colors duration-300'
							onClick={() => {
								setIsShowBurgerMenu(false);
							}}>
							Home
						</Link>
						<Link
							href='/create-task'
							className=' hover:text-purple transition-colors duration-300'
							onClick={() => {
								setIsShowBurgerMenu(false);
							}}>
							Create task!
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
}
