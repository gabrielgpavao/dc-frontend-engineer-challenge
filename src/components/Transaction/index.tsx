import Image from 'next/image'
import { calendarNextIcon } from '@/assets/icons'
import TransactionCard from './TransactionCard'
import { tTransaction } from '@/interfaces'
import { format } from 'date-fns'

interface iTransactionProps {
	date: Date,
	transactions: tTransaction[]
}

export default function Transaction({ date, transactions }: iTransactionProps) {
	const transactionDate = format(date, 'dd/MM/yyyy')

	return (
		<section className='mb-5'>
			<div className='flex items-center gap-2 mb-[1.125rem]'>
				<figure className='h-[1.125rem] w-4'>
					<Image src={calendarNextIcon} alt='Movimentações do Dia' height={16} width={16} className='max-h-full max-w-full'/>
				</figure>
				<h2 className='text-black text-sm font-medium'>Movimentações de {transactionDate}</h2>
				<span className='font-medium text-xs text-neutral-dark bg-[#9C9EA01F] px-2 py-1 rounded-full'>{transactions.length}</span>
			</div>

			<ul className='flex flex-col gap-4'>
				{
					transactions.map((transaction) => (
						<TransactionCard key={transaction.id} transaction={transaction}/>
					))
				}
			</ul>
		</section>
	)
}
