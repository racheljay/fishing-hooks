import React from 'react'
import Data from './data/data.json'

function Items(props) {

  const itemData = Data.items.map((item, index) => {
    return <li
    class="list-group-item d-flex justify-content-between align-items-center"
    onClick={() => console.log(item)}
    >
      {item.item}
      <span class="badge badge-primary badge-pill">{item.price}</span>
    </li>
  })
  const accessorieData = Data.accessories.map((item, index) => {
    return <li class="list-group-item d-flex justify-content-between align-items-center">
      {item.item}
      <span class="badge badge-primary badge-pill">{item.price}</span>
    </li>
  })
  const shippingData = Data.shipping.map((item, index) => {
    return <li class="list-group-item d-flex justify-content-between align-items-center">
      {item.item}
      <span class="badge badge-primary badge-pill">{item.price}</span>
    </li>
  })

  let content = "";
  return (
    <>
      <h1>{props.pages[props.currentPage]}</h1>
      <ul class="list-group">
      {
        props.currentPage === 0 ? content = itemData
          : props.currentPage === 1 ? content = accessorieData
            : props.currentPage === 2 ? content = shippingData
            : content = "Coming soon"
    }
      


      </ul>
    </>
  )
}

export default Items