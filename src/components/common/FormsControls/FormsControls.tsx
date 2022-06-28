import { FC, ReactNode } from 'react'
import { WrappedFieldMetaProps } from 'redux-form'
import { WrappedFieldProps } from 'redux-form/lib/Field'
// @ts-ignore
import classes from './FormsControl.module.css'

interface FormControlProps {
  meta: WrappedFieldMetaProps
  children: ReactNode
}

const FormControl: FC<FormControlProps> = ({
                                             meta: { touched, error },
                                             children
                                           }) => {

  const isError = touched && error

  return (
    <div className={ `${ classes.formControl } ${ isError ? classes.error : '' }` }>
      <div>
        { children }
      </div>
      <div>
        { isError ? <span>{ error }</span> : '' }
      </div>
    </div>
  )
}

export const Textarea: FC<WrappedFieldProps> = props => {
  const { input, meta, ...restProps } = props
  return <FormControl { ...props }><textarea { ...restProps } { ...input } /></FormControl>
}

export const Input: FC<WrappedFieldProps> = props => {
  const { input, meta, ...restProps } = props
  return <FormControl { ...props }><input { ...restProps } { ...input } /></FormControl>
}
