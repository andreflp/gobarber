import { Router } from 'express'

import CreateUsersService from '../services/CreateUserService'

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
	try {
		const { name, email, password } = request.body

		const createUser = new CreateUsersService()

		const user = await createUser.execute({
			name,
			email,
			password
		})

		delete user.password

    return response.json(user)
	} catch (error) {
		return response.status(400).json({ error: error.message })
	}
})

export default usersRouter
