import { tUser } from '@/interfaces'
import { v4 as uuidv4 } from 'uuid'

export const userMock: tUser = {
	id: uuidv4(),
	name: 'Luiz Antônio Neto',
	email: 'luiz@mail.com',
	avatarURL: 'https://avatars.githubusercontent.com/u/61487887?v=4',
	company: 'Delta Code Ltda',
	createdAt: new Date('2023-09-26T10:00:0Z')
}
