import { format, setMonth, startOfYear } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export default function getMonthsOfTheYear(): string[] {
	return Array.from({ length: 12 }, (_, monthIndex) => {
		const monthDate = setMonth(
			startOfYear(new Date()),
			monthIndex
		)
		return format(monthDate, 'MMMM', { locale: ptBR })
	})
}
