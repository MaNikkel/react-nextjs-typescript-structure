import { HomeActionsTypes, SETNAME, SETNAMEREQUEST } from './types'

// Reducer
export interface IHomeState {
  name: string
  loading: boolean
}

const INITIAL_STATE: IHomeState = {
  name: 'Hello World! next + redux + saga + typescript',
  loading: false
}

export default function HomeReducer(
  state = INITIAL_STATE,
  action: HomeActionsTypes
): IHomeState {
  switch (action.type) {
    case SETNAMEREQUEST:
      return {
        ...state,
        loading: true
      }
    case SETNAME:
      return {
        ...state,
        name: action.payload.name,
        loading: false
      }
    default:
      return state
  }
}
