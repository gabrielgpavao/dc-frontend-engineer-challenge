import { getHours } from 'date-fns'

enum Greeting {
	MORNING = 'Bom dia',
	AFTERNOON = 'Bom tarde',
	EVENING = 'Bom noite'
}

const MORNING_START_HOUR = 6
const AFTERNOON_START_HOUR = 12
const EVENING_START_HOUR = 18

export default function greetings(): string {
	const time = getHours(new Date())

	if (time >= MORNING_START_HOUR && time < AFTERNOON_START_HOUR) {
		return Greeting.MORNING
	}

	if (time >= AFTERNOON_START_HOUR && time < EVENING_START_HOUR) {
		return Greeting.AFTERNOON
	}

	return Greeting.EVENING
}
