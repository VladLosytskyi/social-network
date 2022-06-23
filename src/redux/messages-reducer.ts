const SEND_MESSAGE = 'social-network/message/SEND_MESSAGE'


interface IChat { name: string, nickname: string }
interface IMessage { message: string }
interface MessagesState {
  chats: IChat[],
  messages: IMessage[]
}
const initialState: MessagesState = {
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


const messagesReducer = (state = initialState, action: any): MessagesState => {
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


interface SendMessageAction { type: typeof SEND_MESSAGE, newMessageText: string }
export const sendMessage = (newMessageText: string): SendMessageAction => ({ type: SEND_MESSAGE, newMessageText })


export default messagesReducer