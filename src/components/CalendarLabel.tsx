import BulletPoint from './BulletPoint'

export default function CalendarLabel() {
	return (
		<section className='text-sm text-neutral-dark font-normal md:mb-0'>
			<h3 className='font-medium mb-5'>Legenda</h3>
			<ul className=' flex flex-col gap-[0.625rem]'>
				<li className='flex gap-3 items-center'>
					<div className='bg-primary h-[1.875rem] w-[1.875rem] mx-[0.4688rem] grid place-items-center rounded-full'>
						<small className='font-medium text-white text-sm'>23</small>
					</div>
					<p>Hoje</p>
				</li>
				<li className='flex gap-3 items-center'>
					<div className='flex flex-col items-center gap-[0.375rem] w-11'>
						<small className='text-sm leading-[initial]'>11</small>
						<BulletPoint transactionType='credit'/>
					</div>
					<p>Data com previsão de entradas</p>
				</li>
				<li className='flex gap-3 items-center'>
					<div className='flex flex-col items-center gap-[0.375rem] w-11'>
						<small className='text-sm leading-[initial]'>19</small>
						<BulletPoint transactionType='debit'/>
					</div>
					<p>Data com previsão de saídas</p>
				</li>
				<li className='flex gap-3 items-center'>
					<div className='flex flex-col items-center w-11 gap-[0.375rem]'>
						<small className='text-sm leading-[initial] block'>10</small>
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
