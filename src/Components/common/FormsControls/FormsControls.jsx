import classes from './FormsControl.module.css'

const FormControl = ({ input, meta, ...props }) => {

  const isError = meta.touched && meta.error

  return (
    <div className={ `${ classes.formControl } ${ isError ? classes.error : "" }` }>
      <div>
        { props.children }
      </div>
      <div>
        { isError ? <span>{ meta.error }</span> : "" }
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
