export type eventName = 'messageReceived' | 'webSocketStatusChanged'
export type webSocketStatusType = 'pending' | 'ready' | 'error'
export type MessageReceivedSubscriberType = (messages: IChatMessageAPI[]) => void
export type WebSocketStatusSubscriberType = (webSocketStatus: webSocketStatusType) => void

export interface ISubscribers { 
  'messageReceived': MessageReceivedSubscriberType[]
  'webSocketStatusChanged': WebSocketStatusSubscriberType[]
}

export interface IChatMessageAPI {
  userId: number
  photo: string
  userName: string
  message: string
}
