import classes from './FormsControl.module.css'

const FormControl = ({ meta: {touched, error}, children }) => {

  const isError = touched && error

  return (
    <div className={ `${ classes.formControl } ${ isError ? classes.error : "" }` }>
      <div>
        { children }
      </div>
      <div>
        { isError ? <span>{ error }</span> : "" }
      </div>
    </div>
  )
}

export const Textarea = props => {
  const { input, meta, child, ...restProps } = props
  return <FormControl { ...props }><textarea { ...restProps } { ...input } /></FormControl>
}

export const Input = props => {
  const { input, meta, child, ...restProps } = props
  return <FormControl { ...props }><input { ...restProps } { ...input } /></FormControl>
}
