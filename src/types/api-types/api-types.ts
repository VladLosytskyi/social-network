export enum ResultCodes {
  Success = 0,
  Error = 1
}

export interface Response<D = {}, RC = ResultCodes> {
  data: D
  resultCode: RC
  messages: string[]
}