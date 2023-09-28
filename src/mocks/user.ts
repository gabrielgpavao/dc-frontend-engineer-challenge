import { tUser } from '@/interfaces'
import { v4 as uuidv4 } from 'uuid'

export const userMock: tUser = {
	id: uuidv4(),
	firstName: 'Gabriel',
	lastName: 'Pavão',
	email: 'gabriel@mail.com',
	avatarURL: 'https://i.imgur.com/2TBmfPW.jpg',
	company: 'Delta Code Ltda',
	createdAt: new Date('2023-09-26T10:53:35.753Z')
}
