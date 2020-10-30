import React from 'react'
import Data from './data/data.json'

function Items(props) {

  const itemData = Data.items.map((item, index) => {
    return <li
    className="list-group-item d-flex justify-content-between align-items-center"
    onClick={() => props.addToCart(item)}
    key={index}
    >
      {item.item}
      <span className="badge badge-primary badge-pill" key={index}>{item.price}</span>
    </li>
  })
  const accessorieData = Data.accessories.map((item, index) => {
    return <li className="list-group-item d-flex justify-content-between align-items-center"
    onClick={() => props.addToCart(item)}
    key={index}
    >
      {item.item}
      <span className="badge badge-primary badge-pill" key={index}>{item.price}</span>
    </li>
  })
  const shippingData = Data.shipping.map((item, index) => {
    return <li className="list-group-item d-flex justify-content-between align-items-center"
    onClick={() => props.addToCart(item)}
    key={index}
    >
      {item.item}
      <span className="badge badge-primary badge-pill" key={index}>{item.price}</span>
    </li>
  })

  let content = "";
  return (
    <>
      <h1>{props.pages[props.currentPage]}</h1>
      <ul className="list-group">
      {
        props.currentPage === 0 ? content = itemData
          : props.currentPage === 1 ? content = accessorieData
            : props.currentPage === 2 ? content = shippingData
            : content = "Page Not Found"
    }
      </ul>
    </>
  )
}

export default Items