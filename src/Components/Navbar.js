import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light" style={{backgroundColor:"#e3f2fd",paddingRight:"100px",paddingLeft:"150px"}}>
      <div className="container-fluid">
    <a href='/' className="navbar-brand fs-3 text fw-bolder">QuadB</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  );
};

export default Navbar;