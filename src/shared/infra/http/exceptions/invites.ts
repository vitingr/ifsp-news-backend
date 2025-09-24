import { ControllerError } from '../middlewares/general-error-handler'

export class InviteAlreadyExistsError extends ControllerError {
  constructor(public status = 409) {
    super('Invite already exists.')
  }
}

export class InviteDoesNotExistError extends ControllerError {
  constructor(public status = 404) {
    super('Invite does not exist.')
  }
}

export class InviteExpiredExistError extends ControllerError {
  constructor(public status = 401) {
    super('Invite is expired.')
  }
}
