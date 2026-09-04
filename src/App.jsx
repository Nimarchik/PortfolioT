import { useEffect } from 'react'
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom'
import { animated, useTransition } from '@react-spring/web';


import style from './assets/styles/index.module.css'
import Header from './widgets/header/Header';
import Footer from './widgets/footer/Footer';

function App() {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      transform: 'translateY(100%)',
      position: 'relative',
      flexGrow: 1,
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
      flexGrow: 1,
    },
  })



  return (
    <>
      <ScrollRestoration />
      <div className={style.wrapper}>
        <Header />
        <div className={style.main}>
          {transitions((style, location) => (
            <animated.div className={style.animated} style={style} >
              <Outlet location={location} />
            </animated.div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
