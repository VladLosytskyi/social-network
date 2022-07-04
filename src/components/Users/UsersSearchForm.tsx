import React, { FC } from 'react'
import { Field, Form, Formik } from 'formik'
// @ts-ignore
import classes from './Users.module.css'
import { IFilter } from '../../types/reducers-types/users-types'

const validate = () => {}

interface UsersSearchFormProps {
  onFilterChange: (filter: IFilter) => void
}

const UsersSearchForm: FC<UsersSearchFormProps> = React.memo(({ onFilterChange }) => {
  const submit = (values, { setSubmitting }) => {
    const filter: IFilter = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true'
    }
    onFilterChange(filter)
    setSubmitting(true)
  }

  return (
    <Formik initialValues={ { term: '', friend: 'null' } } validate={ validate } onSubmit={ submit }>
      { ({ isSubmitting }) => (
        <Form className={ classes.usersSearchForm }>
          <Field type="text" name="term" placeholder="Find User" />
          <Field name="friend" as="select" >
            <option value="null">All</option>
            <option value="true">Followed</option>
            <option value="false">Not Followed</option>
          </Field>
          <button type="submit" disabled={ isSubmitting } className={ classes.blueButton }>Search</button>
        </Form>
      ) }
    </Formik>
  )
})

export default UsersSearchForm