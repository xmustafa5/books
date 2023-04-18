import { Link } from 'react-router-dom';
import { links } from '../utils/data';
import BurgerMenu from '../assets/menu.png';
import { useState } from 'react';
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };
  return (
    <header className='navbar'>
      <h1 className='logo' >books</h1>
      <nav id='mune' className={isActive ? 'active ': ''} >
        {links.map((link, i) => (
          <Link key={i} to={link.link}>
            {link.name}
          </Link>
        ))}
    
      </nav>
      <img
        className='burger'
        src={BurgerMenu}
        onClick={handleClick}
        width={30}
        height={30}
        alt='buger menu'
      />
    </header>
  );
}
