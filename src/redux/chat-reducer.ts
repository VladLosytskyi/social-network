import { v1 } from 'uuid'
import { AppDispatch, AppThunk } from './store'
import { chatAPI } from '../api/chat-api'
import {
  ChatAction,
  ChatActionTypes,
  IChatMessage,
  IChatState,
  IMessageReceivedAC,
  IWebSocketStatusChangedAC
} from '../types/reducers-types/chat-types'
import { webSocketStatusType } from '../types/api-types/chat-types'

const initialState: IChatState = {
  messages: [],
  webSocketStatus: 'pending'
}


const chatReducer = (state = initialState, action: ChatAction): IChatState => {
  switch (action.type) {
    case ChatActionTypes.MESSAGE_RECEIVED: {
      return {
        ...state,
        messages: [...state.messages, ...action.messages.map(message => ({ ...message, id: v1() }))]
          .filter((_, index, array) => index >= array.length - 100)
      }
    }
    case ChatActionTypes.WEB_SOCKET_STATUS_CHANGED: {
      return { ...state, webSocketStatus: action.webSocketStatus }
    }
    default: {
      return state
    }
  }
}


export const messageReceived = (messages: IChatMessage[]): IMessageReceivedAC => ({
  type: ChatActionTypes.MESSAGE_RECEIVED,
  messages
})
export const webSocketStatusChanged = (webSocketStatus: webSocketStatusType): IWebSocketStatusChangedAC => ({
  type: ChatActionTypes.WEB_SOCKET_STATUS_CHANGED,
  webSocketStatus
})


let onMessageReceived: ((messages: IChatMessage[]) => void) | null = null
const onMessageReceivedCreator = (dispatch: AppDispatch) => onMessageReceived === null
  ? onMessageReceived = (messages: IChatMessage[]) => dispatch(messageReceived(messages))
  : onMessageReceived

let onWebSocketStatusChanged: ((webSocketStatus: webSocketStatusType) => void) | null = null
const onWebSocketStatusChangedCreator = (dispatch: AppDispatch) => onWebSocketStatusChanged === null
  ? onWebSocketStatusChanged = (webSocketStatus: webSocketStatusType) => dispatch(webSocketStatusChanged(webSocketStatus))
  : onWebSocketStatusChanged

export const startMessagesListeningThunk = (): AppThunk => (dispatch: AppDispatch) => {
  chatAPI.startWebSocketChanel()
  chatAPI.subscribeOnWebSocketUpdates('messageReceived', onMessageReceivedCreator(dispatch))
  chatAPI.subscribeOnWebSocketUpdates('webSocketStatusChanged', onWebSocketStatusChangedCreator(dispatch))
}
export const stopMessagesListeningThunk = (): AppThunk => (dispatch: AppDispatch) => {
  chatAPI.unsubscribeFromWebSocketUpdates('messageReceived', onMessageReceivedCreator(dispatch))
  chatAPI.unsubscribeFromWebSocketUpdates('webSocketStatusChanged', onWebSocketStatusChangedCreator(dispatch))
  chatAPI.stopWebSocketChanel()
}
export const sendMessageThunk = (message: string): AppThunk => () => {
  chatAPI.sendMessage(message)
}


export default chatReducer