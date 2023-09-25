import { creditArrowIcon, debitArrowIcon } from '@/assets/icons'
import Image from 'next/image'
import { iTransaction } from '@/interfaces'
import formatPrice from '@/utils/formatPrice'

interface iTransactionListProps {
	transaction: iTransaction
}

export default function TransactionCard({ transaction }: iTransactionListProps) {
	const { id, title, type, value, category } = transaction
	const transactionValue = formatPrice(value)

	return (
		<li id={id} className='shadow-[0px_2px_8px_1px_rgba(224,232,240,0.4)] bg-neutral-light rounded-md px-3 py-2 flex items-center justify-between max-w-[24.25rem] gap-3'>
			<div className='flex gap-3 max-w-[calc(100%-8.5rem)]'>
				<figure
					className={`h-8 min-w-[2rem] rounded-full grid place-items-center ${type === 'debit' ? 'bg-secondary-light' : 'bg-primary-light'}`}
				>
					{
						type === 'debit'
							? <Image src={debitArrowIcon} height={12} width={12} alt='Débito' title='Débito'/>
							: <Image src={creditArrowIcon} height={12} width={12} alt='Crédito' title='Crédito'/>
					}
				</figure>

				<div className='flex flex-col gap-[0.125rem] max-w-full'>
					<h3 className='text-xs font-medium text-[#0F4D64] truncate'>{title}</h3>

					<small className='text-xs text-neutral capitalize'>{category}</small>
				</div>
			</div>

			<small className={`text-xs font-medium whitespace-nowrap ${type === 'debit' ? 'text-secondary-dark' : 'text-primary'}`}>{transactionValue}</small>
		</li>
	)
}
