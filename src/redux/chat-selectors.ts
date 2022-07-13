import { RootState } from './store'

export const getChatMessagesSelector = (state: RootState) => {
  return state.chatPage.messages
}

export const getWebSocketStatusSelector = (state: RootState) => {
  return state.chatPage.webSocketStatus
}
