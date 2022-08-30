import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h2 className='text-5xl font-bold mt-3 text-center'>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer