// Action Types
export const SETNAME = 'home/SETNAME'
export const SETNAMEREQUEST = 'home/SETNAME_REQUEST'

interface ISetName {
  name: string
}

interface ISetNameAction {
  type: typeof SETNAME
  payload: ISetName
}

interface ISetNameRequestAction {
  type: typeof SETNAMEREQUEST
}

export type HomeActionsTypes = ISetNameAction | ISetNameRequestAction
