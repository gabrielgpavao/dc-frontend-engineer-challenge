export default function greetings(): string {
	const currentDate = new Date()
	const time = currentDate.getHours()
	let greeting: string

	switch (true) {
	case time >= 6 && time < 12:
		greeting = 'Bom dia'
		break
	case time >= 12 && time < 18:
		greeting = 'Boa tarde'
		break
	default:
		greeting = 'Boa noite'
		break
	}

	return greeting
}
