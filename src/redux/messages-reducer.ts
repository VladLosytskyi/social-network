import {
  IMessagesState,
  MessagesActionTypes,
  ISendMessageAC,
  MessagesActions, } from '../types/reducers-types/messages-types'


const initialState: IMessagesState = {
  chats: [
    { id: 1, name: 'Andrew', nickname: '@Andrew' },
    { id: 2, name: 'Ivan', nickname: '@Ivan' },
    { id: 3, name: 'Sasha', nickname: '@Sasha' },
    { id: 4, name: 'Viktor', nickname: '@Viktor' },
    { id: 5, name: 'Valera', nickname: '@Valera' }
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'What do you plan to do today?' }
  ]
}


const messagesReducer = (state = initialState, action: MessagesActions): IMessagesState => {
  switch (action.type) {
    case MessagesActionTypes.SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: action.newMessageText }]
      }
    default:
      return state
  }
}


export const sendMessage = (newMessageText: string): ISendMessageAC => ({
  type: MessagesActionTypes.SEND_MESSAGE,
  newMessageText
})


export default messagesReducer