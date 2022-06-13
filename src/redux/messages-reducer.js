const SEND_MESSAGE = 'social-network/message/SEND_MESSAGE'

let initialState = {
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

const messagesReducer = (state = initialState, action) => {
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

export const sendMessage = newMessageText => ({ type: SEND_MESSAGE, newMessageText })

export default messagesReducer