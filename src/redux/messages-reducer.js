const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

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
  ],
  newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      }
    case SEND_MESSAGE:
      let text = state.newMessageText
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, { message: text }]
      }
    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextCreator = text => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text })

export default messagesReducer