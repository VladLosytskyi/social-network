interface IChat {
  id: number
  name: string
  nickname: string
}
interface IMessage {
  id: number
  message: string
}
export interface MessagesState {
  chats: IChat[]
  messages: IMessage[]
}

export enum MessagesActionTypes {
  SEND_MESSAGE = 'SEND_MESSAGE'
}

export interface SendMessageAction {
  type: MessagesActionTypes.SEND_MESSAGE
  newMessageText: string
}

export type MessagesActions = SendMessageAction
