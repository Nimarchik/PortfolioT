import { Link } from 'react-router-dom';
import style from '../../assets/styles/index.module.css'

const Home = () => {
  return (
    <>
      <section className={style.top}>
        <div className={style.container}>
          <div className={style.home}>
            <div className={style.homeBox}>
              <h1 className={style.homeTitle}>
                Adaptive Logo Design for Your Brand
              </h1>
              <div className={style.homeBoxVector}></div>
            </div>
            <Link className={style.homeBtn}>
              Explore works
              <svg xmlns="http://www.w3.org/2000/svg" className={style.homeBtnArrow} width="18" height="12" viewBox="0 0 18 12" fill="white">
                <path d="M1 5.5H17" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" />
                <path d="M12 1L17 6L12 11" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className={style.about}>
        <div className={style.container}>
          <div className={style.aboutInner}>
            <div className={style.aboutInnerContent}>
               
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;