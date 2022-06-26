export interface AppState {
  initialized: boolean
}

export enum AppActionsTypes {
  SET_INITIALIZE = 'SET_INITIALIZE'
}

export interface SetInitializeAction { type: AppActionsTypes.SET_INITIALIZE }
