import { Calendar, CalendarLabel, Header, Navbar, Profile, Transaction } from '@/components/'
import useUser from '@/hooks/useUser'

export default function Home() {
	const { user, transactions } = useUser()

	const transactionDate = new Date('2023-09-20T10:53:35.753Z')
	const transactionsInTheDate = transactions.filter(({ createdAt }) => {
		const transactionDay = String(createdAt.getDate()).padStart(2, '0')
		const transactionDateDay = String(transactionDate.getDate()).padStart(2, '0')

		return transactionDay === transactionDateDay
	})

	return (
		<>
			<Header/>
			<div className='md:flex md:flex-row-reverse md:justify-end'>
				<main className='container px-4 relative'>
					<Profile name={`${user.firstName} ${user.lastName}`} avatarURL={user.avatarURL} company={user.company}/>
					<div className='md:flex'>
						<Calendar/>
						{/* <Transaction date={transactionDate} transactions={transactionsInTheDate}/> */}
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
