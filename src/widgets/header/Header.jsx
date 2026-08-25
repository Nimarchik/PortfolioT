import { Link } from 'react-router-dom';
import style from '../../assets/styles/index.module.css'


// IMAGES
import logo from '../../assets/images/Brand-logo.svg'


const Header = () => {

  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <nav className={style.nav}>
            <Link to={`/Home`}>
              <img src={logo} alt="brand Logo" />
            </Link>
            <ul className={style.navList}>
              {['Home', 'About', 'Works'].map((item, ind) => (
                <li className={style.navListItem} key={ind} >
                  <Link to={`/${item}`}>{item === "About" ? "About Me" : item === "Works" ? "My Works" : item}</Link>
                </li>
              ))}
              <Link to={`/Contact`} className={style.navListButton}>contact</Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;