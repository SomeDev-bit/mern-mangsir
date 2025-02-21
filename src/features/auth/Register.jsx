import { Button, IconButton, Input, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { registerSchema } from '../../utils/validator';
import { useNavigate } from 'react-router';

const Register = () => {
  const [pass, setPass] = useState(false);
  const nav = useNavigate();
  return (
    <div className='max-w-[400px] p-4'>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',

        }}
        onSubmit={(val) => {
          console.log(val);
        }}
        validationSchema={registerSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <Typography variant="h4" color="blue-gray">
                Register
              </Typography>
              <Typography color="gray" className="mt-1 mb-5 font-normal">
                Nice to meet you! Enter your details to Register.
              </Typography>
            </div>

            <div>


              <Input
                onChange={handleChange}
                value={values.email}
                label='Username'
                type='text'
                name='username'
              />
              {errors.username && touched.username && <p className='text-red-500 text-sm'>{errors.username}</p>}
            </div>
            <div>


              <Input
                onChange={handleChange}
                value={values.email}
                label='Email'
                type='email'
                name='email'
              />
              {errors.email && touched.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
            </div>

            <div className="relative flex w-full max-w-[24rem]">
              <Input
                onChange={handleChange}
                value={values.password}
                label='Password'
                type={pass ? 'text' : 'password'}
                name='password'
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <IconButton
                onClick={() => setPass(!pass)}
                variant='text' className="!absolute right-1 top-1 rounded" size='sm'>
                <i className={`fa ${pass ? 'fa-unlock' : 'fa-lock'}`} />
              </IconButton>
              {errors.password && touched.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
            </div>



            <Button
              type='submit'
              className='w-full py-[9px]' size='sm'>Submit</Button>

          </form>
        )}

      </Formik>

      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account ?
        <Button
          onClick={() => nav(-1)}
          variant='text' className="font-medium text-gray-900">
          Login
        </Button>
      </Typography>


    </div>
  )
}

export default Register
