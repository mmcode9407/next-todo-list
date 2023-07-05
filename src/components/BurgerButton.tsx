type ButtonProps = {
	isShow: boolean;
	onClick: () => void;
};

export default function BurgerButton({ isShow, onClick }: ButtonProps) {
	return (
		<button
			className='md:hidden border-0 bg-transparent cursor-pointer focus:outline-none'
			onClick={onClick}>
			<span className='flex items-center relative w-[35px] h-[30px]'>
				<span
					className={`absolute  w-[35px] h-[2px] bg-purple-dark transition-transform duration-200 ease-in-out ${
						isShow ? 'opacity-0' : 'top-0 opacity-100'
					} `}></span>
				<span
					className={`absolute w-[35px] h-[2px] bg-purple-dark transition-transform duration-200 ease-in-out ${
						isShow && 'rotate-[225deg]'
					}`}></span>
				<span
					className={`absolute w-[35px] h-[2px] bg-purple-dark transition-transform duration-200 ease-in-out ${
						isShow ? '-rotate-[225deg]' : 'bottom-0'
					}`}></span>
			</span>
		</button>
	);
}
