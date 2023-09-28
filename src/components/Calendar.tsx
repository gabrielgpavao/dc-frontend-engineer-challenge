import { calendarSelectIcon } from '@/assets/icons'
import Select from './Select'
import DatePicker from './DatePicker'
import useUser from '@/hooks/useUser'
import { format, getYear } from 'date-fns'
import getMonthsOfTheYear from '@/utils/getMonthsOfTheYear'

interface iFilterOptionProps {
	filterName: string
	isActive?: boolean
}

export default function Calendar() {
	const { setCurrentMonth, setCurrentYear, todaysDate } = useUser()

	function FilterOption({ filterName, isActive }: iFilterOptionProps) {
		return (
			<li className={`text-sm font-medium rounded-[0.1875rem] h-full px-3 grid place-items-center ${isActive ? 'bg-primary-light text-primary' : 'bg-[#9C9EA01F] text-neutral-dark'}`}>
				{filterName}
			</li>
		)
	}

	const months = getMonthsOfTheYear()
	const monthSelectOptions: { value: number; label: string }[] = months.map((month, index) => ({
		value: index + 1,
		label: month
	}))

	const currentYear = getYear(todaysDate)
	const yearSelectOptions = Array.from({ length: 5 }, (_, index) => {
		const value = (currentYear - index).toString()
		return {
			value,
			label: value
		}
	})

	return (
		<section className='max-w-[24.25rem] mb-6 pb-5 border-b-2 border-[#F1F1F1] md:border-b-0 md:border-r-2 md:h-[42.75rem] md:pb-0 md:pr-16 md:mr-16'>
			<ul className='flex items-center gap-4 h-6 mb-5'>
				<FilterOption filterName='Hoje'/>
				<FilterOption filterName='Esta semana'/>
				<FilterOption filterName='Este mês' isActive/>
			</ul>

			<div className='hidden md:flex gap-4 w-full mb-5'>
				<fieldset className='w-[11.5rem]'>
					<label htmlFor='month' className='text-sm text-neutral-dark block'>Mês</label>

					<Select onChange={(event) => {setCurrentMonth(event.target.value)}} icon={calendarSelectIcon} name='month' defaultValue={format(todaysDate, 'M')} options={monthSelectOptions}/>
				</fieldset>

				<fieldset className='w-[11.5rem]'>
					<label htmlFor='year' className='text-sm text-neutral-dark block'>Ano</label>

					<Select onChange={(event) => {setCurrentYear(event.target.value)}} icon={calendarSelectIcon} name='year' options={yearSelectOptions}/>
				</fieldset>
			</div>

			<DatePicker/>
		</section>
	)
}
