import React, {useState, useEffect} from 'react';
import Nav from './Nav'


function App() {

  let pages = ["Items", "Accesories", "Shipping", "Submit"]
   
  const [currentPage, setCurrentPage] = useState(0)

  //component did update
  const setPage = (newPageNum) => {
    console.log(newPageNum)
    setCurrentPage(newPageNum)
    window.localStorage.setItem('currentPage', JSON.stringify(newPageNum))
  }

  //component did mount
  useEffect(() => {
    let lsPage = window.localStorage.getItem('currentPage')
    if(lsPage !== currentPage) {
      setCurrentPage(JSON.parse(lsPage))
    }
    console.log('in use effect')
  }, [currentPage])



  return (
    <div className="container">
      <Nav
        pages={pages}
        currentPage={currentPage}
        setPage={setPage}
      
      />
      <h1>Fishing Hooks</h1>
    </div>
  );
}

export default App;
