/* eslint @typescript-eslint/no-empty-interface: "off" */
import 'react-redux'
import { IHomeState } from './ducks/Home'

type IRootState = {
  home: IHomeState
}

declare module 'react-redux' {
  export interface DefaultRootState extends IRootState {}
}
