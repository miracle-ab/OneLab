export interface ITransferData {
  transferTo: string
  amount: number
  transferDate: Date,
  minus?: boolean
}

export interface IUser {
  user: string
  pin: string
}

