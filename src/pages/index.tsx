import { CalendarLabel, Header, Navbar, Profile, Transaction } from '@/components/'
import { iTransaction } from '@/interfaces'

export default function Home() {
	const transactions: iTransaction[] = [
		{
			id: '1234',
			title: 'Pré-Labore',
			type: 'credit',
			category: 'Salário',
			value: 3997.99
		},
		{
			id: '12345',
			title: 'Imposto de Renda',
			type: 'debit',
			category: 'Imposto',
			value: 1005.47
		}
	]

	const transactionDate = new Date()

	return (
		<>
			<Header/>
			<div className='md:flex md:flex-row-reverse md:justify-end'>
				<main className='container px-4 relative'>
					<Profile name='Gabriel Galvão Pavão' avatarURL='https://i.imgur.com/2TBmfPW.jpg' company='Delta Code Ltda'/>
					<div>
						<Transaction date={transactionDate} transactions={transactions}/>
						<CalendarLabel/>
					</div>
					<footer className='hidden absolute bottom-3 md:block'>
						<p className='text-sm font-medium text-neutral-dark'>Desenvolvido por <strong className='font-bold'>Delta Code LTDA®</strong> 2023</p>
					</footer>
				</main>
				<Navbar/>
			</div>
		</>
	)
}
