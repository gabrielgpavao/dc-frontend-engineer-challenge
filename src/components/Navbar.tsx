import Image, { StaticImageData } from 'next/image'
import { calendarIcon, documentIcon, speakerIcon, chatIcon } from '@/assets/icons'

function NavItem ({ imageSrc, title }: { imageSrc: StaticImageData, title: string }) {
	return (
		<li className='flex flex-col items-center gap-[0.375rem] cursor-pointer'>
			<figure className='flex justify-center md:h-10 md:items-center'>
				<Image src={imageSrc} alt={title} title={title} className='h-6 w-6'/>
			</figure>
			<h3 className='text-[0.8125rem] text-[#FFFFFFBF] font-light md:hidden'>{title}</h3>
		</li>
	)
}

export default function Navbar() {
	return (
		<nav className='h-[4.6875rem] px-5 flex justify-center bg-primary rounded-t-md sm:rounded-none navbarMd'>
			<ul className='flex justify-between items-center w-full ulNavbarMd'>
				<NavItem imageSrc={calendarIcon} title='Calendário'/>
				<NavItem imageSrc={speakerIcon} title='Comunicados'/>
				<NavItem imageSrc={chatIcon} title='Solicitações'/>
				<NavItem imageSrc={documentIcon} title='Processos'/>
			</ul>
		</nav>
	)
}
