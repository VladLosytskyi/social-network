import {
  MessagesState,
  MessagesActionTypes,
  SendMessageAction,
  MessagesActions, } from '../types/reducers-types/messages'


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


const messagesReducer = (state = initialState, action: MessagesActions): MessagesState => {
  switch (action.type) {
    case MessagesActionTypes.SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { message: action.newMessageText }]
      }
    default:
      return state
  }
}


export const sendMessage = (newMessageText: string): SendMessageAction => ({
  type: MessagesActionTypes.SEND_MESSAGE,
  newMessageText
})


export default messagesReducer