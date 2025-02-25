import { Button, Input, Option, Select, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router'
import { productSchema, validCategory } from '../../utils/validator'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { base } from '../../app/apiUrls'
import { useUpdateProductMutation } from '../product/productApi'

const ProductEditForm = ({ product }) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const nav = useNavigate();
  const { user } = useSelector((state) => state.userSlice);
  return (
    <div className='max-w-[400px] p-4 mx-auto mt-4'>
      <Formik
        initialValues={{
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          image: null,
          imageReview: product.image,
          imagePath: ''
        }}
        onSubmit={async (val) => {
          const formData = new FormData();
          formData.append('title', val.title);
          formData.append('description', val.description);
          formData.append('price', val.price);
          formData.append('category', val.category);

          try {
            if (val.image === null) {
              await updateProduct({
                body: formData,
                id: product._id,
                token: user.token
              }).unwrap();
            } else {
              formData.append('image', val.image);
              await updateProduct({
                body: formData,
                id: product._id,
                token: user.token
              }).unwrap();
            }

            toast.success('Product Updated Successfully');
            nav(-1);

          } catch (err) {
            toast.error(err.data?.message);
          }
        }}
        validationSchema={productSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
          <form onSubmit={handleSubmit} >
            <div className='mb-2'>
              <Typography variant="h4" color="blue-gray">
                Edit Product
              </Typography>
            </div>

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
                  label='Choose a Category'
                  value={values.category}
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

                    setFieldValue('imagePath', file.name);
                    setFieldValue('imageReview', URL.createObjectURL(file));
                  }}
                />


                {values.imageReview && <div className='mb-1 mt-3'>
                  <img className='w-full h-[150px] object-cover' src={`${base}/${values.imageReview}`} alt="img" />
                </div>}

                {errors.image && touched.image && <p className='text-red-500 text-sm'>{errors.image}</p>}
              </div>

              <Button
                loading={isLoading}
                type='submit'
                className='w-full py-[9px]' size='sm'>Submit</Button>
            </main>


          </form>
        )}

      </Formik>




    </div>
  )
}

export default ProductEditForm 
