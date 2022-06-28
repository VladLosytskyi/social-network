export type ValidatorType = (values: string) => string | undefined

export const required: ValidatorType = values => values ? undefined : "Field is required"

export const maxLengthCreator = (maxLength: number): ValidatorType => values => {
  return values.length > maxLength
    ? `Max length is ${ maxLength } symbols`
    : undefined
}