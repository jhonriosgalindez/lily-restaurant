import React from 'react'
import Image from "next/legacy/image"
import { Formik, Form, Field, ErrorMessage } from 'formik'


const ContactForm = () => {

  const [formSended, setFormSended] = React.useState(false)

  return (
    <>
      <section>
        <div className='w-full'>
          <Formik
            initialValues={{
              name: '',
              date: '',
              time: '',
              guest: '',
            }}
            validate={(values) => {
              let errors = {}

              if (!values.name) {
                errors.name = 'Required'
              }

              if (!values.date) {
                errors.date = 'Required'
              }

              if (!values.time) {
                errors.time = 'Required'
              }

              // if (!values.guest) {
              //   errors.guest = 'Required'
              // }

              return errors
            }}
            onSubmit={(values, { resetForm }) => {
              resetForm()
              setFormSended(true)
              setTimeout(() => setFormSended(false), 5000)
              console.log('Formulario enviado')
            }}
          >
            {({ errors }) => (
              <Form className='flex flex-wrap jus gap-4 p-10 w-full bg-[var(--color-secundary)]'>
                <div className='flex flex-col justify-center w-full'>
                  <label htmlFor="name" className='pb-2 text-sm'>Name</label>
                  <Field 
                    className='p-2 outline-0 placeholder:text-black bg-[var(--color-primary)]'
                    type="text" 
                    id='name' 
                    name='name' 
                    autoComplete='off' 
                    placeholder='' 
                  />
                  <ErrorMessage
                    name='name' 
                    component={() => (
                      <div className='p-1 text-xs italic text-red-500'>
                        {errors.name}
                      </div>
                    )} />
                </div>
                <div className='flex flex-col justify-center w-full'>
                  <label htmlFor="date" className='pb-2 text-sm'>Date</label>
                  <Field 
                    className='p-2 outline-0 bg-[var(--color-primary)]'
                    type="date" 
                    id='date' 
                    name='date' 
                    autoComplete='off' 
                    placeholder='' 
                  />
                  <ErrorMessage
                    name='date' 
                    component={() => (
                      <div className='p-1 text-xs italic text-red-500'>
                        {errors.date}
                      </div>
                    )} />
                </div>
                <div className='flex flex-col justify-center w-full'>
                  <label htmlFor="time" className='pb-2 text-sm'>Time</label>
                  <Field 
                    className='p-2 outline-0 bg-[var(--color-primary)]'
                    type="time" 
                    id='time' 
                    name='time' 
                    autoComplete='off' 
                    placeholder='' 
                  />
                  <ErrorMessage
                    name='time' 
                    component={() => (
                      <div className='p-1 text-xs italic text-red-500'>
                        {errors.time}
                      </div>
                    )} />
                </div>
                <div className='flex flex-col justify-center w-full'>
                  <label htmlFor="guest" className='pb-2 text-sm'>¿How many guests?</label>
                  <select name="guest" id="guest" className='p-2 bg-[var(--color-primary)]'>
                    <option value="no">-----</option>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4+</option>
                  </select>
                  <ErrorMessage
                    name='guest' 
                    component={() => (
                      <div className='p-1 text-xs italic text-red-500'>
                        {errors.guest}
                      </div>
                    )} />
                </div>

                <button type='submit' 
                  className='my-4 py-3 px-5 text-[var(--color-text)] transition-all bg-[var(--color-button)] hover:text-[var(--color-secundary)] hover:bg-[var(--color-text)]'
                >
                  Find a table
                </button>
                { formSended ? <p>Your data has been sent successfully!</p> : ''}
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  )
}

export default ContactForm
