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
}

export default function Select({ icon, name, options, onChange }: iSelectProps) {
	return (
		<fieldset className='flex relative w-full'>
			<Image src={icon} alt='Ícone do campo de seleção' className='absolute top-3 left-[0.625rem]'/>

			<select onChange={onChange} name={name} id={name} className='border border-[#9C9EA059] text-sm font-bold capitalize outline-none text-black rounded-[0.1875rem] appearance-none w-full h-10 pl-10'>
				{
					options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)
				}
			</select>

			<span className='absolute right-4 top-4 rotate-45 p-[2px] border-b border-r border-black'/>
		</fieldset>
	)
}
