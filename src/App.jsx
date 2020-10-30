import React, { useState, useEffect } from 'react';
import Nav from './Nav'
import Checkout from './Checkout'
import Items from './Items'


function App() {

  let pages = ["Items", "Accessories", "Shipping", "Submit"]
  // let shoppingCart = []

  const [currentPage, setCurrentPage] = useState(0)

  //component did update
  const setPage = (newPageNum) => {
    // console.log(newPageNum)
    setCurrentPage(newPageNum)
    window.localStorage.setItem('currentPage', JSON.stringify(newPageNum))

  }

  const addToCart = (item) => {
    console.log(item)
    // console.log(shoppingCart)
    let newShoppingCart = shoppingCart.concat(item)
    window.localStorage.setItem('storedCart', JSON.stringify(newShoppingCart))
    setShoppingCart(newShoppingCart)
    console.log(shoppingCart)
    // console.log(getTotal())
  }

  //component did mount
  useEffect(() => {
    console.log('did mount')
    let lsPage = window.localStorage.getItem('currentPage')
    if(lsPage) {
      if (lsPage !== currentPage) {
        setCurrentPage(JSON.parse(lsPage))
      }
    }
    
    let lsCart = window.localStorage.getItem('storedCart')
    if(lsCart) {
      if(lsCart !== shoppingCart) {
        setShoppingCart(JSON.parse(lsCart))
      }
    }
    
    console.log(currentPage)
  }, [])

  const [shoppingCart, setShoppingCart] = useState([])

  // useEffect(() => {
  //   let lsCart = window.localStorage.getItem('storedCart')
  //   if (lsCart !== shoppingCart) {
  //     setShoppingCart(JSON.parse(lsCart))
  //   }
  // }, [])

  const getTotal = () => {
    let prices = shoppingCart.map((item, index) => {
      return item.price
    })
    // console.log(prices)
    let sum = prices.reduce((a, b) => {
      return a + b;
    }, 0)
    if(shoppingCart.length === 0) {
      return '0.00'
    } else {
    return (sum * 1.06).toFixed(2)
    }
  }


  let content = ""
  return (
    <div className="container">
      <Nav
        pages={pages}
        currentPage={currentPage}
        setPage={setPage}
        cart={shoppingCart}
        total={getTotal}
      />
      {pages.map((item, index) => {
        if (currentPage < 3) {
          content = <Items
            currentPage={currentPage}
            pages={pages}
            addToCart={addToCart}
          />
        } else if (currentPage === 3) {
          content = <Checkout
            currentPage={currentPage}
            cart={shoppingCart}
            total={getTotal}
          />
        }
      })}
      {content}
    </div>
  );
}

export default App;
