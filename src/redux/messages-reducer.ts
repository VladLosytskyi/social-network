const SEND_MESSAGE = 'social-network/message/SEND_MESSAGE'


type ChatType = { name: string, nickname: string }
type MessageType = { message: string }
export type InitialStateType = {
  chats: ChatType[],
  messages: MessageType[]
}
const initialState: InitialStateType = {
  chats: [
    { name: 'Andrew', nickname: '@Andrew' },
    { name: 'Ivan', nickname: '@Ivan' },
    { name: 'Sasha', nickname: '@Sasha' },
    { name: 'Viktor', nickname: '@Viktor' },
    { name: 'Valera', nickname: '@Valera' }
  ],
  messages: [
    { message: 'Hi' },
    { message: 'How are you?' },
    { message: 'What do you plan to do today?' }
  ]
}


const messagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { message: action.newMessageText }]
      }
    default:
      return state
  }
}


type SendMessageActionType = { type: typeof SEND_MESSAGE, newMessageText: string }
export const sendMessage = (newMessageText: string): SendMessageActionType => ({ type: SEND_MESSAGE, newMessageText })


export default messagesReducer