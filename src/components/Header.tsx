import Image from 'next/image'
import dcLogo from '@/assets/images/dc-light-logo.svg'
import { List } from '@phosphor-icons/react'

export default function Header() {
	return (
		<header className='bg-primary w-screen flex items-center justify-between p-4 rounded-b-md sm:rounded-none'>
			<div className='flex items-center'>
				<Image src={dcLogo} alt='Logo da Delta Code' width={50} height={50}/>
				<h1 className='text-white text-left text-base tracking-wide font-medium ml-4 sm:ml-8'>Tela Inicial</h1>
			</div>
			<button type='button' className='h-11 w-11 bg-primary-light rounded-full grid place-items-center transition hover:bg-primary-dark'>
				<List size={28} color='white'/>
			</button>
		</header>
	)
}
