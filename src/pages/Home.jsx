import React from 'react'
import { useGetProductsQuery, useLazyGetProductsQuery } from '../redux/productApi'
import { Button } from '@material-tailwind/react';

const Home = () => {

  const { isLoading, error, data } = useGetProductsQuery();
  // const [getProducts, { isLoading, data, error }] = useLazyGetProductsQuery();

  // console.log(data);





  if (isLoading) {
    return <h1>Loading....</h1>
  }


  if (error) {
    return <h1>{`${error.data} Status:-${error.status}`}</h1>
  }


  return (
    <div className='p-5'>
      {/* <Button onClick={() => getProducts()}>Submit</Button> */}

      {data && data.products.map((product) => {
        return <div key={product.id}>
          <h1>{product.title}</h1>

        </div>
      })}

    </div >
  )
}

export default Home
