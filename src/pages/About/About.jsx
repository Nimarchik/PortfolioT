import { Link } from 'react-router-dom';
import style from '../../assets/styles/index.module.css'

const About = () => {
  return (
    <>
      <section className={style.about}>
        <div className={style.container}>
          <div className={style.aboutWrapper}>
            <div className={style.worksHeader}>
              <div className={style.worksVector}></div>
              <h1 className={style.worksHeaderTitle}>
                About Me
              </h1>
              <p className={style.worksHeaderSub}>
                Little Brief About Myself
              </p>
            </div>

            <span className={style.worksLine}></span>

            <div className={style.aboutInners}>
              <h1 className={style.aboutInnersTitle}>
                My mission is to make design easier.
              </h1>
              <p className={style.aboutInnersSup}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae magni laudantium, vitae ducimus illo suscipit tenetur facere corrupti asperiores, pariatur, corporis consectetur voluptatibus? Deserunt neque maxime ipsa nam totam.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos unde nisi iure autem commodi deleniti
              </p>
            </div>

            <div className={style.aboutPict}>
              <img src="" alt="Your Photo" className={style.aboutPictImg} />
              <img src="" alt="Your Photo" className={style.aboutPictImg1} />
            </div>

            <div className={style.aboutFollow}>
              <h2 className={style.aboutFollowTitle}>
                Follow me on:
              </h2>

              <ul className={style.aboutFollowList}>
                <li className={style.aboutFollowListItem}>
                  <Link to='/' className={style.aboutFollowListItemLink}>
                    Dribble
                  </Link>
                </li>
                <li className={style.aboutFollowListItem}>
                  <Link to='/' className={style.aboutFollowListItemLink}>
                    Twitter
                  </Link>
                </li>
                <li className={style.aboutFollowListItem}>
                  <Link to='/' className={style.aboutFollowListItemLink}>
                    Facebook
                  </Link>
                </li>
                <li className={style.aboutFollowListItem}>
                  <Link to='/' className={style.aboutFollowListItemLink}>
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;