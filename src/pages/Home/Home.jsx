import { Link } from 'react-router-dom';
import style from '../../assets/styles/index.module.css'

import img from './images/projectImages/Img.jpg'
import img1 from './images/projectImages/Img1.jpg'
import img2 from './images/projectImages/Img2.jpg'
import img3 from './images/projectImages/Img3.jpg'
import monial from './images/mou.svg'

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
              <div className={style.aboutInnerContentVector}></div>
              <h2 className={style.aboutInnerContentTitle}>Let’s get know about me closer</h2>
              <p className={style.aboutInnerContentSub}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolores. Et veritatis ad maiores, ea sequi sit blanditiis ab fugit quae. Dolore, accusantium voluptatum voluptates aut cum debitis sed cupiditate!
              </p>
              <Link className={style.aboutInnerContentBtn}>Discover More About Me</Link>
            </div>
            <div className={style.aboutInnerUser}>
              <div className={style.aboutInnerUserTxt}>
                YOUR PHOTO
                {/* Please remove this block after adding a photo. */}
              </div>

              {/* uncomment, and then remove the background after adding the photo */}
              {/* <img src={user} alt="default profile picture" className={style.aboutInnerUserImg} /> */}
            </div>
          </div>
        </div>
      </section>

      <section className={style.projects}>
        <div className={style.container}>
          <div className={style.projectsInner}>
            <div className={style.projectsInnerContent}>
              <h3 className={style.projectsInnerContentTitle}>
                My Projects Highlight
                <div className={style.projectsInnerContentTitleVector}></div>
              </h3>
              <Link className={style.projectsInnerContentBtn}>Explore More
                <svg className={style.homeBtnArrow} xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                  <path d="M1 5.5H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 1L17 6L12 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Link>
            </div>


            {/* I need your database here, I'll do it like this */}
            <div className={style.projectsInnerGroup}>
              <ul className={style.projectsInnerGroupList}>
                <li className={style.projectsInnerGroupListItem}>
                  <img src={img} alt="Image project" className={style.projectsInnerGroupListItemImg} />
                  <h4 className={style.projectsInnerGroupListItemTitle}>
                    Brand Journey Improvements
                    <span className={style.projectsInnerGroupListItemTitleSpan}></span>
                  </h4>

                  <ul className={style.projectsInnerGroupListItemEnum}>
                    <li className={style.projectsInnerGroupListItemEnumItem}>
                      <p className={style.projectsInnerGroupListItemEnumItemName}>Client:</p>
                      <p className={style.projectsInnerGroupListItemEnumItemAns}>Organc</p>
                    </li>
                    <li className={style.projectsInnerGroupListItemEnumItem}>
                      <p className={style.projectsInnerGroupListItemEnumItemName}>Work:</p>
                      <div className={style.projectsInnerGroupListItemEnumItemWork}>
                        <p className={style.projectsInnerGroupListItemEnumItemAns}>Branding</p>
                        <p className={style.projectsInnerGroupListItemEnumItemAns}>Logo design</p>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className={style.projectsInnerGroupListItem}>
                  <img src={img1} alt="Image project" className={style.projectsInnerGroupListItemImg} />
                  <h4 className={style.projectsInnerGroupListItemTitle}>
                    Brand Grouping
                    <span className={style.projectsInnerGroupListItemTitleSpan}></span>
                  </h4>

                  <ul className={style.projectsInnerGroupListItemEnum}>
                    <li className={style.projectsInnerGroupListItemEnumItem}>
                      <p className={style.projectsInnerGroupListItemEnumItemName}>Client:</p>
                      <p className={style.projectsInnerGroupListItemEnumItemAns}>FR</p>
                    </li>
                    <li className={style.projectsInnerGroupListItemEnumItem}>
                      <p className={style.projectsInnerGroupListItemEnumItemName}>Work:</p>
                      <div className={style.projectsInnerGroupListItemEnumItemWork}>
                        <p className={style.projectsInnerGroupListItemEnumItemAns}>Branding</p>
                        <p className={style.projectsInnerGroupListItemEnumItemAns}>Logo design</p>
                      </div>
                    </li>
                  </ul>
                </li>


                <li className={style.projectsInnerGroupListItem}>
                  <img src={img2} alt="Image project" className={style.projectsInnerGroupListItemImg} />
                  <h4 className={style.projectsInnerGroupListItemTitle}>
                    NFT Glimps
                    <span className={style.projectsInnerGroupListItemTitleSpan}></span>
                  </h4>

                  <ul className={style.projectsInnerGroupListItemEnum}>
                    <li className={style.projectsInnerGroupListItemEnumItem}>
                      <p className={style.projectsInnerGroupListItemEnumItemName}>Client:</p>
                      <p className={style.projectsInnerGroupListItemEnumItemAns}>Rumanda</p>
                    </li>
                    <li className={style.projectsInnerGroupListItemEnumItem}>
                      <p className={style.projectsInnerGroupListItemEnumItemName}>Work:</p>
                      <div className={style.projectsInnerGroupListItemEnumItemWork}>
                        <p className={style.projectsInnerGroupListItemEnumItemAns}>NFT Design</p>

                      </div>
                    </li>
                  </ul>
                </li>

                <li className={style.projectsInnerGroupListItem}>
                  <img src={img3} alt="Image project" className={style.projectsInnerGroupListItemImg} />
                  <h4 className={style.projectsInnerGroupListItemTitle}>
                    Brand Suggestions
                    <span className={style.projectsInnerGroupListItemTitleSpan}></span>
                  </h4>

                  <ul className={style.projectsInnerGroupListItemEnum}>
                    <li className={style.projectsInnerGroupListItemEnumItem}>
                      <p className={style.projectsInnerGroupListItemEnumItemName}>Client:</p>
                      <p className={style.projectsInnerGroupListItemEnumItemAns}>T3d</p>
                    </li>
                    <li className={style.projectsInnerGroupListItemEnumItem}>
                      <p className={style.projectsInnerGroupListItemEnumItemName}>Work:</p>
                      <div className={style.projectsInnerGroupListItemEnumItemWork}>
                        <p className={style.projectsInnerGroupListItemEnumItemAns}>NFT logo</p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={style.testimonial}>
        <div className={style.container}>
          <div className={style.monialInner}>
            <div className={style.monialInnerTop}>
              <div className={style.monialInnerTopVector}></div>
              <h5 className={style.monialInnerTopTitle}>
                Testimonial
              </h5>
              <img src={monial} alt="Testimonial" className={style.monialInnerTopImg} />
            </div>
            <div className={style.monialInnerContent}>
              <p className={style.monialInnerContentSub}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequatur nostrum assumenda dolor consectetur earum eveniet facilis sequi voluptates minima dicta tempora, accusantium inventore dolore perferendis. Qui laboriosam in aliquid.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi vero nihil eos tenetur optio eveniet ad sapiente vitae, quibusdam voluptate quidem enim delectus praesentium id iure magnam ut facere.
              </p>
              <p className={style.monialInnerContentInitials}>-Your Name</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;