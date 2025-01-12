import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
   <>
    <div className="container">
        <header className="border-bottom lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col text-center">
              <Link className="blog-header-logo text-body-emphasis text-decoration-none" to="/">
              RUTAS ADMINISTRATOR
              </Link>
            </div>          
          </div>
        </header>

        <div className="nav-scroller py-1 mb-3 border-bottom">
          <nav className="nav nav-underline justify-content-between">
            <Link className="nav-item nav-link link-body-emphasis" to="/">Home</Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/api-test">Api test</Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/prices">Precios</Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/about-us">Sobre nosotros</Link>            
          </nav>
        </div>
      </div>
   </>
  );
}

export default Header;
