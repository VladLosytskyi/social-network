import {
  eventName,
  ISubscribers,
  MessageReceivedSubscriberType,
  WebSocketStatusSubscriberType,
  webSocketStatusType
} from '../types/api-types/chat-types'


/*** Initial Variables*/
let webSocket: WebSocket | null = null
let subscribers: ISubscribers = {
  'messageReceived': [],
  'webSocketStatusChanged': []
}

/*** WebSocket Event Listeners*/
const onOpen = () => {
  onWebSocketStatusChanged('ready')
}
const onClose = () => {
  onWebSocketStatusChanged('pending')
  setTimeout(createChatWS, 3000)
}
const onError = () => {
  onWebSocketStatusChanged('error')
}
const onMessageReceived = (event: MessageEvent) => {
  const newMessages = JSON.parse(event.data)
  subscribers['messageReceived'].forEach(subscriber => subscriber(newMessages))
}
const onWebSocketStatusChanged = (status: webSocketStatusType) => {
  subscribers['webSocketStatusChanged'].forEach(subscriber => subscriber(status))
}

/*** WebSocket Creating*/
const cleanWebSocketUp = () => {
  webSocket?.removeEventListener('open', onOpen)
  webSocket?.removeEventListener('close', onClose)
  webSocket?.removeEventListener('error', onError)
  webSocket?.removeEventListener('message', onMessageReceived)
  webSocket?.close()
}
const createChatWS = () => {
  cleanWebSocketUp()
  webSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  onWebSocketStatusChanged('pending')
  webSocket.addEventListener('open', onOpen)
  webSocket.addEventListener('close', onClose)
  webSocket.addEventListener('error', onError)
  webSocket.addEventListener('message', onMessageReceived)
}

/*** Chat API*/
export const chatAPI = {
  startWebSocketChanel: () => {
    createChatWS()
  },
  stopWebSocketChanel: () => {
    subscribers['messageReceived'] = []
    subscribers['webSocketStatusChanged'] = []
    cleanWebSocketUp()
  },
  subscribeOnWebSocketUpdates: (event: eventName, callback: MessageReceivedSubscriberType | WebSocketStatusSubscriberType) => {
    // @ts-ignore
    subscribers[event].push(callback)
    return () => {
      // @ts-ignore
      subscribers[event] = subscribers[event].filter(subscriber => subscriber !== callback)
    }
  },
  unsubscribeFromWebSocketUpdates: (event: eventName, callback: MessageReceivedSubscriberType | WebSocketStatusSubscriberType) => {
    // @ts-ignore
    subscribers[event] = subscribers[event].filter(subscriber => subscriber !== callback)
  },
  sendMessage: (message: string) => {
    webSocket?.send(message)
  }
}