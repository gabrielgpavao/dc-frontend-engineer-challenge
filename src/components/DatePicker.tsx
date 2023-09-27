import { useState } from 'react'
import cx from 'classnames'
import {
	add,
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	getDay,
	isEqual,
	isSameDay,
	parse,
	startOfMonth,
	startOfToday,
	startOfWeek
} from 'date-fns'
import BulletPoint from './BulletPoint'
import { tTransaction } from '@/interfaces'
import useUser from '@/hooks/useUser'

interface iTransactionIndicatorProps {
	transactions: tTransaction[],
	date: Date
}

export default function DatePicker() {
	const today = startOfToday()
	const [selectedDay, setSelectedDay] = useState(today)
	const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
	const { transactions } = useUser()

	const firstDayOfCurrentMonth = startOfMonth(
		parse(currentMonth, 'MMM-yyyy', new Date())
	)

	const days = eachDayOfInterval({
		start: startOfWeek(firstDayOfCurrentMonth),
		end: endOfWeek(endOfMonth(firstDayOfCurrentMonth))
	}).map((date) => ({
		date
	}))

	function next() {
		const firstDayOfNextMonth = add(firstDayOfCurrentMonth, { months: 1 })
		setCurrentMonth(format(firstDayOfNextMonth, 'MMM-yyyy'))
	}

	function previous() {
		const firstDayOfNextMonth = add(firstDayOfCurrentMonth, { months: -1 })
		setCurrentMonth(format(firstDayOfNextMonth, 'MMM-yyyy'))
	}

	const colStartClasses = [
		'',
		'col-start-2',
		'col-start-3',
		'col-start-4',
		'col-start-5',
		'col-start-6',
		'col-start-7'
	]

	function TransactionIndicator({ transactions, date }: iTransactionIndicatorProps) {
		const transactionsByDate = transactions.filter((transaction) => isSameDay(transaction.createdAt, date))

		if (!transactionsByDate.length) {
			return
		}

		const creditTransactions = transactionsByDate.some((transaction) => transaction.type === 'credit')
		const debitTransactions = transactionsByDate.some((transaction) => transaction.type === 'debit')

		if (!(creditTransactions && debitTransactions)) {
			return (
				<div className='flex gap-[0.1875rem] '>
					<BulletPoint transactionType={transactionsByDate[0].type}/>
				</div>
			)
		}

		return (
			<div className='flex gap-[0.1875rem]'>
				<BulletPoint transactionType='credit'/>
				<BulletPoint transactionType='debit'/>
			</div>
		)
	}

	return (
		<div className='w-full'>
			<ul className='grid grid-cols-7 mb-5 text-sm font-medium text-center text-black place-items-center'>
				{['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((char, index) => (
					<li key={index} className='h-[1.875rem] w-[1.875rem] bg-[#9C9EA01F] rounded-full grid place-items-center transition'>
						{char}
					</li>
				))}
			</ul>

			<div className={`grid grid-cols-7 text-sm ${days.length > 7*5 ? 'h-72' : 'h-60'}`}>
				{days.map((day, index) => (
					<div
						key={index}
						className={cx(
							index === 0 && colStartClasses[getDay(day.date)],
							'grid place-items-center'
						)}
					>
						<button
							type='button'
							onClick={() => setSelectedDay(day.date)}
							className={`text-neutral-dark h-[1.875rem] w-[1.875rem] flex  flex-col items-center hover:font-semibold ${isEqual(day.date, today) && 'relative before:absolute before:-z-10 before:bottom-[0.3125rem] before:bg-primary before:min-h-[1.875rem] before:w-[1.875rem] before:rounded-full text-white font-medium'} ${(isEqual(day.date, selectedDay) && !isEqual(day.date, today)) && 'border border-primary rounded-lg'}`}
						>
							{format(day.date, 'd')}

							<TransactionIndicator date={day.date} transactions={transactions}/>
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
