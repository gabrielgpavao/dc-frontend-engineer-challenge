import { Header, Navbar, Profile } from '@/components/'

export default function Home() {
	return (
		<>
			<Header/>
			<div className='md:flex md:flex-row-reverse md:justify-end'>
				<main className='container px-4'>
					<Profile name='Gabriel Galvão Pavão' avatarURL='https://i.imgur.com/2TBmfPW.jpg' company='Delta Code Ltda'/>
				</main>
				<Navbar/>
			</div>
		</>
	)
}
