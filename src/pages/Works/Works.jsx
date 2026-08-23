import { Link } from 'react-router-dom'
import style from '../../assets/styles/index.module.css'

import img from './images/Img.jpg'
import img1 from './images/Img1.jpg'
import img2 from './images/Img2.jpg'
import img3 from './images/Img3.jpg'
import img4 from './images/Img4.jpg'
import img5 from './images/Img5.jpg'
import img6 from './images/Img6.jpg'
import img7 from './images/Img7.jpg'

const Works = () => {
  return (
    <>
      <section className={style.works}>
        <div className={style.container}>
          <div className={style.worksHeader}>
            <div className={style.worksVector}></div>
            <h1 className={style.worksHeaderTitle}>
              My works
            </h1>
            <p className={style.worksHeaderSub}>
              Showcase About Works
            </p>
          </div>

          <span className={style.worksLine}></span>

          <div className={style.worksProject}>
            <ul className={style.worksProjectList}>
              <li className={style.worksProjectListItem}>
                <img src={img} alt="Work Images" className={style.worksProjectListItemImg} />
                <p className={style.worksProjectListItemSub}>blue</p>
                <h3 className={style.worksProjectListItemTitle}>Orvillebury</h3>
              </li>
              <li className={style.worksProjectListItem}>
                <img src={img1} alt="Work Images" className={style.worksProjectListItemImg} />
                <p className={style.worksProjectListItemSub}>green</p>
                <h3 className={style.worksProjectListItemTitle}>West Lavada</h3>
              </li>
              <li className={style.worksProjectListItem}>
                <img src={img2} alt="Work Images" className={style.worksProjectListItemImg} />
                <p className={style.worksProjectListItemSub}>aqua</p>
                <h3 className={style.worksProjectListItemTitle}>Rempelshire</h3>
              </li>
            </ul>

            <ul className={style.worksProjectList}>
              <li className={style.worksProjectListItem}>
                <img src={img3} alt="Work Images" className={style.worksProjectListItemImg} />
                <p className={style.worksProjectListItemSub}>lime</p>
                <h3 className={style.worksProjectListItemTitle}>Delfinaland</h3>
              </li>
              <li className={style.worksProjectListItem}>
                <img src={img4} alt="Work Images" className={style.worksProjectListItemImg} />
                <p className={style.worksProjectListItemSub}>fuchsia</p>
                <h3 className={style.worksProjectListItemTitle}>Buckridgeburgh</h3>
              </li>
            </ul>

            <ul className={style.worksProjectList}>
              <li className={style.worksProjectListItem}>
                <img src={img5} alt="Work Images" className={style.worksProjectListItemImg} />
                <p className={style.worksProjectListItemSub}>black</p>
                <h3 className={style.worksProjectListItemTitle}>Pfefferstad</h3>
              </li>
              <li className={style.worksProjectListItem}>
                <img src={img6} alt="Work Images" className={style.worksProjectListItemImg} />
                <p className={style.worksProjectListItemSub}>purple</p>
                <h3 className={style.worksProjectListItemTitle}>South Adrienne</h3>
              </li>
              <li className={style.worksProjectListItem}>
                <img src={img7} alt="Work Images" className={style.worksProjectListItemImg} />
                <p className={style.worksProjectListItemSub}>maroon</p>
                <h3 className={style.worksProjectListItemTitle}>Lake Trevor</h3>
              </li>
            </ul>

            <Link className={style.worksProjectLink}>Load more works</Link>

          </div>
        </div>
      </section>
    </>
  );
};

export default Works;