import Image from 'next/image'
import { calendarIcon, documentIcon, speakerIcon, chatIcon } from '@/assets/icons'

export default function Navbar() {
	function NavItem ({ imageSrc, title }: { imageSrc: any, title: string }) {
		return (
			<li className='flex flex-col items-center cursor-pointer'>
				<figure className='w-6 h-6'>
					<Image src={imageSrc} alt={title} title={title} className='h-full w-full'/>
				</figure>
				<h3 className='mt-1 text-sm text-[#ffffffda] font-light md:hidden'>{title}</h3>
			</li>
		)
	}

	return (
		<nav className='p-4 bg-primary rounded-t-md sm:rounded-none navbarMd'>
			<ul className='flex justify-between items-center w-full ulNavbarMd'>
				<NavItem imageSrc={calendarIcon} title='Calendário'/>
				<NavItem imageSrc={speakerIcon} title='Comunicados'/>
				<NavItem imageSrc={chatIcon} title='Solicitações'/>
				<NavItem imageSrc={documentIcon} title='Processos'/>
			</ul>
		</nav>
	)
}
