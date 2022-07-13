import { webSocketStatusType } from '../api-types/chat-types'

export interface IChatState {
  messages: IChatMessage[]
  webSocketStatus: webSocketStatusType
}

export enum ChatActionTypes {
  MESSAGE_RECEIVED = 'MESSAGE_RECEIVED',
  WEB_SOCKET_STATUS_CHANGED = 'WEB_SOCKET_STATUS_CHANGED'
}


export interface IMessageReceivedAC {
  type: ChatActionTypes.MESSAGE_RECEIVED
  messages: IChatMessage[]
}

export interface IWebSocketStatusChangedAC {
  type: ChatActionTypes.WEB_SOCKET_STATUS_CHANGED
  webSocketStatus: webSocketStatusType
}

export interface IChatMessage {
  id: string
  userId: number
  photo: string
  userName: string
  message: string
}

export type ChatAction = IMessageReceivedAC | IWebSocketStatusChangedAC
