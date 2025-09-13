import { ControllerError } from '../middlewares/general-error-handler'

export class ArticleAlreadyExistsError extends ControllerError {
  constructor(public status = 409) {
    super('Article already exists.')
  }
}

export class ArticleDoesNotExistError extends ControllerError {
  constructor(public status = 404) {
    super('Article does not exist.')
  }
}
