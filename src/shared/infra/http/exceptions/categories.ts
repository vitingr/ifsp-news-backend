import { ControllerError } from '../middlewares/general-error-handler'

export class CategoryAlreadyExistsError extends ControllerError {
  constructor(public status = 409) {
    super('Category already exists.')
  }
}

export class CategoryDoesNotExistError extends ControllerError {
  constructor(public status = 404) {
    super('Category does not exist.')
  }
}
