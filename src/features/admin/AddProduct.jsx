import { Button, Input, Option, Select, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router'
import { productSchema, validCategory } from '../../utils/validator'

const AddProduct = () => {

  const nav = useNavigate();
  return (
    <div className='max-w-[400px] p-4 mx-auto mt-4'>
      <Formik
        initialValues={{
          title: '',
          description: '',
          price: '',
          category: '',
          image: null,
          imageReview: '',
        }}
        onSubmit={async (val) => {
          console.log(val);
        }}
        validationSchema={productSchema}

      >
        {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
          <form onSubmit={handleSubmit} >
            {/* <div className='mb-2'>
              <Typography variant="h4" color="blue-gray">
                Add Product
              </Typography>
            </div> */}

            <main className='space-y-6'>

              <div>
                <Input
                  onChange={handleChange}
                  value={values.title}
                  label='Title'
                  type='text'
                  name='title'
                />
                {errors.title && touched.title && <p className='text-red-500 text-sm'>{errors.title}</p>}
              </div>
              <div>

                <Input
                  onChange={handleChange}
                  value={values.description}
                  label='Description'
                  type='text'
                  name='description'
                />
                {errors.description && touched.description && <p className='text-red-500 text-sm'>{errors.description}</p>}
              </div>
              <div>

                <Input
                  onChange={handleChange}
                  value={values.price}
                  label='Price'
                  type='number'
                  name='price'
                />
                {errors.price && touched.price && <p className='text-red-500 text-sm'>{errors.price}</p>}
              </div>
              <div>

                <Select
                  label='Chhose a Category'
                  onChange={(e) => setFieldValue('category', e)}>
                  {validCategory.map((cat) => <Option key={cat} value={cat}>{cat}</Option>)}
                </Select>
                {errors.category && touched.category && <p className='text-red-500 text-sm'>{errors.category}</p>}
              </div>




              <div>

                <Input

                  label='Select an Image'
                  type='file'
                  name='image'
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setFieldValue('image', file);
                    setFieldValue('imageReview', URL.createObjectURL(file));
                  }}
                />
                <h1>{`${values.imageReview}`}</h1>
                {values.imageReview && <div className='mb-1 mt-3'>
                  <img className='w-full h-[150px] object-cover' src={values.imageReview} alt="img" />
                </div>}
                {errors.image && touched.image && <p className='text-red-500 text-sm'>{errors.image}</p>}
              </div>

              <Button
                type='submit'
                className='w-full py-[9px]' size='sm'>Submit</Button>
            </main>


          </form>
        )}

      </Formik>




    </div>
  )
}

export default AddProduct
