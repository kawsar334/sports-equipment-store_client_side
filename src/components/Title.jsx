import React from 'react'

const Title = ({title}) => {
  return (
    <div
          data-aos="zoom-in-up"
    className='w-full mx-auto my-10 text-4xl text-center font-semibold '>

        <h1>{title}</h1>
    </div>
  )
}

export default Title