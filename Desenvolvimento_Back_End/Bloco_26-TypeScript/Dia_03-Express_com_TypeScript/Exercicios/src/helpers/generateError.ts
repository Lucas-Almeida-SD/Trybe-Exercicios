interface IError {
  code: number,
  message: string,
}

export default (code: number, message: string): IError => ({
  code,
  message,
})