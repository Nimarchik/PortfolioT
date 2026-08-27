import { Link } from 'react-router-dom';
import style from '../../assets/styles/index.module.css'

import img from './images/Rectangle.jpg'
import img1 from './images/Rectangle1.jpg'
import img2 from './images/Rectangle2.jpg'
import logo1 from './images/'


const ProkectDetail = () => {
  return (
    <>
      <section className={style.detail}>
        <div className={style.container}>
          <div className={style.detailInner}>
            <div className={style.worksHeader}>
              <div className={style.worksVector}></div>
              <h1 className={style.worksHeaderTitle}>
                Project Detail
              </h1>
              <p className={style.worksHeaderSub}>
                Details About The Porject
              </p>
            </div>

            <span className={style.worksLine}></span>

            <div className={style.detaileContent}>
              <img src={img} alt="Rectangle" className={style.detaileContentImg} />

              <div className={style.detaileContentText}>
                <h2 className={style.detaileContentTextTitle}>Project Story</h2>
                <p className={style.detaileContentTextSub}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non quos vel labore alias, aliquam quidem sed accusamus obcaecati expedita rerum consectetur debitis repellat quod provident, voluptas a omnis tenetur.

                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta sint fuga officiis dicta nam? Iusto fugit veniam assumenda sint incidunt rerum? Temporibus magni laborum libero similique dolor aut ullam repellat.</p>
              </div>

              <div className={style.detaileContentPic}>
                <img src={img1} alt="Rectangle" className={style.detaileContentPicImg} />
                <img src={img2} alt="Rectangle" className={style.detaileContentPicImg} />
              </div>

              <div className={style.detaileContentText}>
                <h2 className={style.detaileContentTextTitle}>Day One</h2>
                <p className={style.detaileContentTextSub}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quos tempora illum pariatur quia, voluptas dicta fuga cupiditate.

                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, molestiae perspiciatis. Fugit illo iste mollitia dolorum. Vitae expedita magni explicabo, possimus saepe ratione doloremque. Quis quidem error quos sunt voluptatem!</p>
              </div>

              <div className={style.detaileContentNav}>
                <Link className={style.detaileContentNavLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="13" viewBox="0 0 50 13" fill="none">
                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M0.656006 1.33081e-07C-0.606846 2.23877e-05 0.274555 1.41676 0.656006 1.83698L10.8721 12.6848C11.2536 13.1051 11.872 13.1051 12.2535 12.6848C12.6349 12.2646 12.6349 11.5833 12.2535 11.1631L3.7048 2.15214H49.0232C49.5627 2.15214 50 1.67038 50 1.0761C50 0.481823 49.5627 6.58092e-05 49.0232 6.58092e-05H3.7048C3.7048 6.58092e-05 0.858303 -3.43187e-06 0.656006 1.33081e-07Z" fill="white" />
                  </svg>
                  Previous work
                </Link>
                <Link className={style.detaileContentNavLink}>
                  next work <svg xmlns="http://www.w3.org/2000/svg" width="50" height="13" viewBox="0 0 50 13" fill="none">
                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M49.344 13C50.6068 13 49.7254 11.5832 49.344 11.163L39.1279 0.315165C38.7464 -0.105054 38.128 -0.105054 37.7465 0.315165C37.3651 0.735383 37.3651 1.41669 37.7465 1.83691L46.2952 10.8479H0.976766C0.437313 10.8479 0 11.3296 0 11.9239C0 12.5182 0.437313 12.9999 0.976766 12.9999H46.2952C46.2952 12.9999 49.1417 13 49.344 13Z" fill="white" />
                  </svg>
                </Link>

              </div>

            </div>

            <div className={style.detailInnerOther}>
              <h3 className={style.detailInnerOtherTitle}></h3>
              <ul className={style.detailInnerOtherList}>
                <li className={style.detailInnerOtherListItem}>
                  <img src="" alt="Logo Project 1" className={style.detailInnerOtherListItemImg} />
                  <h4 className={style.detailInnerOtherListItemTitle}>Logo Project 1</h4>
                  <p className={style.detailInnerOtherListItemSub}>Branding</p>
                </li>
                <li className={style.detailInnerOtherListItem}>
                  <img src="" alt="Logo Project 2" className={style.detailInnerOtherListItemImg} />
                  <h4 className={style.detailInnerOtherListItemTitle}>Logo Project 2</h4>
                  <p className={style.detailInnerOtherListItemSub}>Branding</p>
                </li>
                <li className={style.detailInnerOtherListItem}>
                  <img src="" alt="Logo Project 3" className={style.detailInnerOtherListItemImg} />
                  <h4 className={style.detailInnerOtherListItemTitle}>Logo Project 3</h4>
                  <p className={style.detailInnerOtherListItemSub}>Branding</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProkectDetail;