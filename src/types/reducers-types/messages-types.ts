export interface IMessagesState {
  chats: IChat[]
  messages: IMessage[]
}

interface IChat {
  id: number
  name: string
  nickname: string
}
interface IMessage {
  id: number
  message: string
}

export enum MessagesActionTypes {
  SEND_MESSAGE = 'SEND_MESSAGE'
}

export interface ISendMessageAC {
  type: MessagesActionTypes.SEND_MESSAGE
  newMessageText: string
}

export type MessagesActions = ISendMessageAC
