import Image from 'next/image'
import dcLogo from '@/assets/images/dc-light-logo.svg'
import { menuIcon } from '@/assets/icons'

export default function Header() {
	return (
		<header className='bg-primary w-full flex items-center justify-between p-4 rounded-b-md sm:rounded-none relative'>
			<div className='flex items-center'>
				<Image src={dcLogo} alt='Logo da Delta Code' width={50} height={50}/>
				<h1 className='text-white text-left text-base tracking-wide font-medium ml-4 sm:ml-8'>Tela Inicial</h1>
			</div>
			<button type='button' className='h-11 w-11 bg-primary-light rounded-full grid place-items-center transition hover:bg-primary-dark'>
				<Image src={menuIcon} alt='Menu Dropdown' width={25} height={25}/>
			</button>
		</header>
	)
}
