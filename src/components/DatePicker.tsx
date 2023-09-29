import cx from 'classnames'
import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	isEqual,
	isSameDay,
	parse,
	startOfMonth,
	startOfWeek
} from 'date-fns'
import BulletPoint from './BulletPoint'
import { tTransaction } from '@/interfaces'
import useUser from '@/hooks/useUser'
import useCloseOnOutClick from '@/hooks/useCloseOnOutClick'

interface iTransactionIndicatorProps {
	transactions: tTransaction[],
	date: Date
}

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

export default function DatePicker() {
	const {
		transactions,
		todaysDate,
		selectedDate,
		selectDate,
		isDateSelected,
		setIsDateSelected,
		currentMonth,
		currentYear
	} = useUser()

	const firstDayOfCurrentMonth = startOfMonth(
		parse(
			currentMonth,
			'M',
			new Date(+currentYear, +currentMonth - 1, 1)
		)
	)

	const days = eachDayOfInterval({
		start: startOfWeek(firstDayOfCurrentMonth),
		end: endOfWeek(endOfMonth(firstDayOfCurrentMonth))
	}).map((date) => ({
		date
	}))

	const datePickerRef = useCloseOnOutClick<HTMLDivElement>(() => { setIsDateSelected(false) })

	return (
		<div className='w-full'>
			<ul className='grid grid-cols-7 mb-5 text-sm font-medium text-center text-black place-items-center'>
				{['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((char, index) => (
					<li key={index} className='h-[1.875rem] w-[1.875rem] bg-[#9C9EA01F] rounded-full grid place-items-center transition'>
						{char}
					</li>
				))}
			</ul>

			<div
				ref={datePickerRef}
				className={cx(
					'grid grid-cols-7 text-sm h-60',
					days.length === 7*6 && 'h-72'
				)}
			>
				{days.map((day, index) => (
					<div
						key={index}
						className='grid place-items-center'
					>
						<button
							type='button'
							onClick={() => selectDate(day.date)}
							className={cx(
								'text-neutral-dark h-[1.875rem] w-[1.875rem] flex flex-col items-center hover:font-semibold',
								isEqual(day.date, todaysDate) && 'text-white font-medium relative before:absolute before:-z-10 before:bottom-[0.3125rem] before:bg-primary before:min-h-[1.875rem] before:w-[1.875rem] before:rounded-full',
								(isEqual(day.date, selectedDate) && (!isEqual(day.date, todaysDate)) && isDateSelected) && 'border border-primary rounded-lg'
							)}
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
