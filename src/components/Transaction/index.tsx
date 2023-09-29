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
		<section className='max-w-[24.25rem] h-full'>
			<div className='flex items-center gap-2 mb-[1.125rem]'>
				<figure className='h-[1.125rem] w-4'>
					<Image src={calendarNextIcon} alt='Movimentações do Dia' height={22} width={22} className='max-h-full max-w-full'/>
				</figure>
				<h2 className='text-black text-sm font-medium'>Movimentações de {transactionDate}</h2>
				<span className='font-medium text-xs text-neutral-dark bg-[#9C9EA01F] h-6 w-6 grid place-items-center rounded-full'>{transactions.length}</span>
			</div>

			{
				transactions.length
					? (
						<ul className='flex flex-col gap-[1.125rem]'>
							{
								transactions.map((transaction) => (
									<TransactionCard key={transaction.id} transaction={transaction}/>
								))
							}
						</ul>
					)
					: (
						<p className='text-sm text-neutral-dark'>
							Sem movimentações na data selecionada
						</p>
					)
			}
		</section>
	)
}
