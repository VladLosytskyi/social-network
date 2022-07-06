import React, { FC } from 'react'
import { Field, Form, Formik } from 'formik'
// @ts-ignore
import classes from './Users.module.css'
import { IFilter } from '../../types/reducers-types/users-types'

const validate = () => {}

interface UsersSearchFormProps {
  filter: IFilter
  onFilterChange: (filter: IFilter) => void
}

const UsersSearchForm: FC<UsersSearchFormProps> = React.memo(({ filter, onFilterChange }) => {
  const submit = (values, { setSubmitting }) => {
    const filterValues: IFilter = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true'
    }
    onFilterChange(filterValues)
    setSubmitting(true)
  }

  return (
    <Formik initialValues={ filter } validate={ validate } onSubmit={ submit }>
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