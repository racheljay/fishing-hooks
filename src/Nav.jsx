import React from 'react';

function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" >Hooks Ltd.</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {
              props.pages.map((item, index) => {
                return(
                  <a 
                  className={"nav-item nav-link " + (props.currentPage === index ? 'active' : '')}
                  onClick={() => props.setPage(index)}
                  >
                    {item}
                    </a>
                )
              })
              
            }
            <div className="nav-item" >Items: {props.cart.length}</div>
            <div className="nav-item" >Total: ${props.total()}</div>

            {/* <a className="nav-item nav-link active" >Home</a>
            <a className="nav-item nav-link" >Features</a>
            <a className="nav-item nav-link" >Pricing</a>
            <a className="nav-item nav-link disabled" >Disabled</a> */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav