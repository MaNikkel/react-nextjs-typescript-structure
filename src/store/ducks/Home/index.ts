// Action Types

export const SETNAME = 'home/SETNAME'

interface ISetName {
  name: string
}

interface ISetNameAction {
  type: typeof SETNAME
  payload: ISetName
}

export type HomeActionsTypes = ISetNameAction

// Action Creators

export function setName(name: string): HomeActionsTypes {
  return {
    type: SETNAME,
    payload: { name: name }
  }
}

// Reducer
export interface IHomeState {
  name: string
}

const INITIAL_STATE: IHomeState = {
  name: 'Hello World!'
}

export default function HomeReducer(
  state = INITIAL_STATE,
  action: HomeActionsTypes
): IHomeState {
  switch (action.type) {
    case SETNAME:
      return {
        ...state,
        name: action.payload.name
      }
    default:
      return state
  }
}
