import React from 'react';

function Checkout(props) {

    const finalBill = props.cart.map((item, index) => {
        return (<li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
        // onClick={() => props.addToCart(item)}
        >
            {item.item}
            <span className="badge badge-primary badge-pill">{item.price}</span>
        </li>
        )
    })

    const currentTotal = <li
        className="list-group-item d-flex justify-content-between align-items-center"
    
    // onClick={() => props.addToCart(item)}
    >
        Total:
    <span className="badge badge-primary badge-pill">${props.total()}</span>
    </li>
    return (
        <>
            <h1>Checkout</h1>
            <ul className="list-group">
                {finalBill}
                {currentTotal}
            </ul>
        </>
    )
}

export default Checkout