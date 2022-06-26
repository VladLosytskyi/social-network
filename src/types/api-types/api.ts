export enum ResultCodes {
  Success = 0,
  Error = 1
}

export interface DefaultResponse {
  resultCode: ResultCodes
  messages: string[]
  data: {}
}