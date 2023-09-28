import BulletPoint from './BulletPoint'

export default function CalendarLabel() {
	return (
		<section className='text-sm text-neutral-dark font-normal mb-8'>
			<h3 className='font-medium mb-4'>Legenda</h3>
			<ul className=' flex flex-col gap-2'>
				<li className='flex gap-4 items-center'>
					<div className='bg-primary h-7 w-7 mx-2 grid place-items-center rounded-full'>
						<small className='font-medium text-white'>23</small>
					</div>
					<p>Hoje</p>
				</li>
				<li className='flex gap-4 items-center'>
					<div className='flex flex-col items-center gap-[0.375rem] w-11'>
						<small className='leading-[initial]'>11</small>
						<BulletPoint transactionType='credit'/>
					</div>
					<p>Data com previsão de entradas</p>
				</li>
				<li className='flex gap-4 items-center'>
					<div className='flex flex-col items-center gap-[0.375rem] w-11'>
						<small className='leading-[initial]'>19</small>
						<BulletPoint transactionType='debit'/>
					</div>
					<p>Data com previsão de saídas</p>
				</li>
				<li className='flex gap-4 items-center'>
					<div className='flex flex-col items-center w-11 gap-[0.375rem]'>
						<small className='leading-[initial] block'>10</small>
						<div className='flex gap-[0.375rem]'>
							<BulletPoint transactionType='credit'/>
							<BulletPoint transactionType='debit'/>
						</div>
					</div>
					<p>Data com previsão de entradas e saídas</p>
				</li>
			</ul>
		</section>
	)
}
