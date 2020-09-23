import { HomeActionsTypes, SETNAME, SETNAMEREQUEST } from './types'
// Action Creators

export function setName(name: string): HomeActionsTypes {
  return {
    type: SETNAME,
    payload: { name: name }
  }
}

export function setNameRequest(): HomeActionsTypes {
  return { type: SETNAMEREQUEST }
}
