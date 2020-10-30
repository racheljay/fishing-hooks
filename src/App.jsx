import React, {useState, useEffect} from 'react';
import Nav from './Nav'
import Checkout from './Checkout'
import Items from './Items'


function App() {

  let pages = ["Items", "Accessories", "Shipping", "Submit"]
  // let shoppingCart = []
   
  const [currentPage, setCurrentPage] = useState(0)
  const [shoppingCart, setShoppingCart] = useState([])

  //component did update
  const setPage = (newPageNum) => {
    // console.log(newPageNum)
    setCurrentPage(newPageNum)
    window.localStorage.setItem('currentPage', JSON.stringify(newPageNum))
    
  }

  const addToCart = (item) => {
    console.log(item)
    // console.log(shoppingCart)
    setShoppingCart(shoppingCart.concat(item))
    window.localStorage.setItem('storedCart', JSON.stringify(shoppingCart))
    console.log(shoppingCart)
    // console.log(getTotal())
  }

  //component did mount
  useEffect(() => {
    console.log('did mount')
    let lsPage = window.localStorage.getItem('currentPage')
    if(lsPage !== currentPage) {
      setCurrentPage(JSON.parse(lsPage))
    }
    // let lsCart = window.localStorage.getItem('storedCart')
    // if(lsCart !== shoppingCart) {
    //   setShoppingCart(JSON.parse(lsCart))
    // }
    console.log(currentPage)
  }, [currentPage, shoppingCart])

  const getTotal = () => {
    let prices = shoppingCart.map((item, index) => {
      return item.price
    })
    // console.log(prices)
    let sum = prices.reduce((a, b) => {
      return a + b;
    }, 0)
    return sum
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
      if(currentPage < 3) {
       content = <Items
        currentPage={currentPage}
        pages={pages}
        addToCart={addToCart}
       />
      } else if(currentPage === 3) {
        content = <Checkout
        currentPage={currentPage}
        />
      }
    })}
    {content}
    </div>
  );
}

export default App;
