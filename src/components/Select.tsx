import Image, { StaticImageData } from 'next/image'
import { ChangeEventHandler } from 'react'

interface iSelectProps {
	icon: StaticImageData
	name: string
	options: {
		value: string | number
		label: string
	}[],
	onChange?: ChangeEventHandler<HTMLSelectElement>
	defaultValue?: string | number
}

export default function Select({ icon, name, options, onChange, defaultValue }: iSelectProps) {
	return (
		<fieldset className='flex relative w-full h-[2.625rem]'>
			<Image src={icon} alt='Ícone do campo de seleção' width={24} height={14} className='absolute top-[0.7813rem] left-3'/>

			<select
				onChange={onChange}
				name={name}
				id={name}
				defaultValue={defaultValue}
				className='border border-[#9C9EA059] text-sm font-bold capitalize outline-none text-black rounded-[0.1875rem] appearance-none w-full h-full pl-[2.9375rem]'
			>
				{
					options.map(({ value, label }) => (
						<option key={value} value={value}>{label}</option>
					))
				}
			</select>

			<span className='absolute right-4 top-4 rotate-45 p-[2px] border-b border-r border-black'/>
		</fieldset>
	)
}
