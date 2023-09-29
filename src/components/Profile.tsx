import greetings from '@/utils/greetings'
import Image from 'next/image'

interface iProfileProps {
	name: string
	avatarURL: string
	company: string
}

export default function Profile({ name, avatarURL, company }: iProfileProps) {
	const greeting = greetings()

	return (
		<section>
			<h3 className='text-sm text-black font-medium'>{greeting}, {name.split(' ')[0]}!</h3>
			<div className='flex items-center mt-5 gap-5'>
				<figure className='h-11 w-11 grid place-items-center'>
					<Image
						src={avatarURL}
						alt='Imagem de Perfil'
						width={44}
						height={44}
						className='max-w-full max-h-full overflow-hidden rounded-full border-2 border-primary'
					/>
				</figure>
				<div className='flex flex-col gap-1'>
					<h2 className='text-black font-medium capitalize'>{name}</h2>
					<small className='text-xs text-neutral uppercase'>{company}</small>
				</div>
			</div>
		</section>
	)
}
