import { ControllerError } from '../middlewares/general-error-handler'

export class AuthorAlreadyExistsError extends ControllerError {
  constructor(public status = 409) {
    super('Author already exists.')
  }
}

export class AuthorDoesNotExistError extends ControllerError {
  constructor(public status = 404) {
    super('Author does not exist.')
  }
}
