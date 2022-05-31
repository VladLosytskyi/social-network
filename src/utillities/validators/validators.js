export const required = values => values ? undefined : "Field is required"


export const maxLengthCreator = maxLength => values => {
  return values.length > maxLength
    ? `Max length is ${ maxLength } symbols`
    : undefined
}