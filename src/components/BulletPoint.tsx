import { tTransactionType } from '@/interfaces'

interface iBulletPointProps {
	transactionType: tTransactionType
}

export default function BulletPoint({ transactionType }: iBulletPointProps) {
	return (
		<span className={`inline-block w-[0.375rem] h-[0.375rem] rounded-full ${transactionType === 'debit' ? 'bg-secondary-dark': 'bg-primary'}`}/>
	)
}
