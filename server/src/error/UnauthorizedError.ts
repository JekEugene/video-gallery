import { AppError } from "./AppError"

export class UnauthorizedError extends AppError {
	constructor(message: string) {
		super(message)
		this.name = `UnauthorizedError`
		this.statusCode = 401
	}
}