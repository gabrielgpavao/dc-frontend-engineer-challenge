import { Calendar, CalendarLabel, Header, Navbar, Profile, Transaction } from '@/components/'
import useUser from '@/hooks/useUser'
import { tTransaction } from '@/interfaces'
import { format } from 'date-fns'

function filterTransactionsByDate(transactions: tTransaction[], date: Date): tTransaction[] {
	return transactions.filter(({ createdAt }) => {
		const transactionDay = format(createdAt, 'd')
		const transactionDateDay = format(date, 'd')

		return transactionDay === transactionDateDay
	})
}

export default function Home() {
	const { user, transactions, isDateSelected, selectedDate } = useUser()

	return (
		<>
			<Header/>
			<div className='md:flex md:flex-row-reverse md:justify-end'>
				<main className='container pt-[1.875rem] px-5 md:px-[1.875rem] relative'>
					<Profile name={`${user.firstName} ${user.lastName}`} avatarURL={user.avatarURL} company={user.company}/>
					<div className='mt-10 mb-14 md:mb-0 md:mt-[3.125rem] md:flex'>
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
