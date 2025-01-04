import { useState } from 'react';
import Botao from '../Buttons/Buttons';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navBar">
      <h1 className="logoPrincipal">MS</h1>
      <div className="toogleMain">
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
      <div className={`buttons ${isMenuOpen ? 'active' : ''}`}>
        <Botao nome="Menu" link="/" onClick={closeMenu} className="btnNavBar" />
        <Botao
          nome="Serviços"
          link="/services"
          onClick={closeMenu}
          className="btnNavBar"
        />
        <Botao
          nome="Nossas Redes"
          link="/social"
          onClick={closeMenu}
          className="btnNavBar"
        />
      </div>
    </div>
  );
};

export default NavBar;
