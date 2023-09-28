import { Calendar, CalendarLabel, Header, Navbar, Profile, Transaction } from '@/components/'
import useUser from '@/hooks/useUser'
import { tTransaction } from '@/interfaces'
import { format } from 'date-fns'

export default function Home() {
	const { user, transactions, isDateSelected, selectedDate } = useUser()

	function filterTransactionsByDate(transactions: tTransaction[], date: Date): tTransaction[] {
		return transactions.filter(({ createdAt }) => {
			const transactionDay = format(createdAt, 'd')
			const transactionDateDay = format(date, 'd')

			return transactionDay === transactionDateDay
		})
	}

	return (
		<>
			<Header/>
			<div className='md:flex md:flex-row-reverse md:justify-end'>
				<main className='container px-4 relative'>
					<Profile name={`${user.firstName} ${user.lastName}`} avatarURL={user.avatarURL} company={user.company}/>
					<div className='md:flex'>
						<Calendar/>
						{
							isDateSelected
								? <Transaction date={selectedDate} transactions={filterTransactionsByDate(transactions, selectedDate)}/>
								: <CalendarLabel/>
						}
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
