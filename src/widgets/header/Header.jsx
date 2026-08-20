import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from '../../assets/styles/index.module.css'


// IMAGES
import logo from '../../assets/images/Brand-logo.svg'


const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <nav className={style.nav}>
            <Link to={`/Home`}>
              <img src={logo} alt="brand Logo" />
            </Link>
            <ul className={style.navList}>
              {['Home', 'About Me', 'My Works'].map((item, ind) => (
                <li className={style.navListItem} key={ind} >
                  <Link to={`/${item}`}>{item}</Link>
                </li>
              ))}
              <button className={style.navListButton}>contact</button>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;