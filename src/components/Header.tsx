import Image from 'next/image'
import dcLogo from '@/assets/images/dc-light-logo.svg'
import { menuIcon } from '@/assets/icons'

export default function Header() {
	return (
		<header className='bg-primary w-full max-h-[4.6875rem] flex items-center justify-between py-3 px-7 rounded-b-md sm:px-[1.125rem] sm:rounded-none relative'>
			<div className='flex items-center'>
				<Image src={dcLogo} alt='Logo da Delta Code' width={48} height={48} className='h-12'/>
				<h1 className='text-white text-left text-base tracking-wide font-bold ml-[0.625rem] before:content-["Tela"] sm:ml-[2.1875rem] sm:before:content-["Página"]'> Inicial</h1>
			</div>
			<button type='button' className='h-[2.8125rem] w-[2.8125rem] bg-[#19ac91] rounded-full grid place-items-center transition hover:bg-primary-dark'>
				<Image src={menuIcon} alt='Menu Dropdown' width={18} height={14}/>
			</button>
		</header>
	)
}
