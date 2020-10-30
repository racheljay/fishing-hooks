import React, {useState, useEffect} from 'react';
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

  //component did mount
  useEffect(() => {
    let lsPage = window.localStorage.getItem('currentPage')
    if(lsPage !== currentPage) {
      setCurrentPage(JSON.parse(lsPage))
    }
    console.log(currentPage)
  }, [currentPage])

  const addToCart = (item) => {
    console.log(item)
  }

  let content = ""
  return (
    <div className="container">
      <Nav
        pages={pages}
        currentPage={currentPage}
        setPage={setPage}
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
