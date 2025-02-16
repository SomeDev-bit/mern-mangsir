import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography, } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { addBlog } from '../redux/blogSlice'
import { nanoid } from '@reduxjs/toolkit'
import { valSchema } from '../utils/validator'


const AddForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div className='p-5 max-w-[400px]'>

      <Formik
        initialValues={{
          title: '',
          detail: '',
          locate: '',
          genres: [],
          country: '',
          // imageReview: ''
        }}

        onSubmit={(val, { resetForm, setValues }) => {

          dispatch(addBlog({
            ...val,
            id: nanoid()
          }));
          resetForm();
          nav(-1);

        }}

        validationSchema={valSchema}
      >

        {({ handleChange, values, errors, touched, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit} className='space-y-6'>

            <div>
              <Input
                onChange={handleChange}
                value={values.title}
                name='title'
                label='Title'
              />
              {errors.title && touched.title && <p className='text-red-300'>{errors.title}</p>}
            </div>

            <div>
              <Typography>Select One of these</Typography>
              <div>
                <Radio label='Indoor' name='locate' onChange={handleChange} value={'indoor'} color='green' />
                <Radio label='Outdoor' onChange={handleChange} name='locate' value={'outdoor'} color='red' />
              </div>
              {errors.locate && touched.locate && <p className='text-red-300'>{errors.locate}</p>}
            </div>

            <div>
              <Typography>Select Genres</Typography>
              <div>

                <Checkbox label='Action' onChange={handleChange} name='genres' value={'action'} />
                <Checkbox label='Comedy' onChange={handleChange} name='genres' value={'comedy'} />
                <Checkbox label='Drama' onChange={handleChange} name='genres' value={'drama'} />
              </div>
              {errors.genres && touched.genres && <p className='text-red-300'>{errors.genres}</p>}
            </div>

            <div>
              <Select
                name='country'
                onChange={(e) => setFieldValue('country', e)}
                label='Select Your Country'>
                <Option value='Nepal'>Nepal</Option>
                <Option value='China'>China</Option>
                <Option value='India'>India</Option>
              </Select>
              {errors.country && touched.country && <p className='text-red-300'>{errors.country}</p>}
            </div>

            {/* <div>
              <Input
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFieldValue('imageReview', URL.createObjectURL(file))

                }}
                type='file' label='choose a file' />

              {values.imageReview && <img className='mt-3' src={values.imageReview} alt="" />}
            </div> */}

            <div>
              <Textarea
                onChange={handleChange}
                value={values.detail}
                name='detail'
                label='Detail'
              />
              {errors.detail && touched.detail && <p className='text-red-300'>{errors.detail}</p>}
            </div>

            <Button type='submit'>Submit</Button>
          </form>
        )}



      </Formik>



    </div >
  )
}

export default AddForm
