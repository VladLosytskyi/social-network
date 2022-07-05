export interface IAppState {
  initialized: boolean
}

export enum AppActionsTypes {
  SET_INITIALIZE = 'SET_INITIALIZE'
}

export interface ISetInitializeAC { type: AppActionsTypes.SET_INITIALIZE }

export type AppActions = ISetInitializeAC
