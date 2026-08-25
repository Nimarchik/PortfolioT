import { Link } from 'react-router-dom';
import style from '../../assets/styles/index.module.css'

import rect from './images/Rectangle.jpg'

const Contact = () => {
  return (<>
    <section className={style.contact}>
      <div className={style.container}>
        <div className={style.contactInner}>
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

          <div className={style.contactUs}>
            <h2 className={style.contactUsTitle}>
              Get in Touch With Us
            </h2>

            <form action="" className={style.contactUsForm}>
              <label htmlFor="" className={style.contactUsFormLabel}>
                <input placeholder=' ' required type="text" className={style.contactUsFormLabelInp} />

                <h3 className={style.contactUsFormLabelName}>Name</h3>
              </label>

              <label htmlFor="" className={style.contactUsFormLabel}>
                <input placeholder=' ' required type="text" className={style.contactUsFormLabelInp} />
                <h3 className={style.contactUsFormLabelSubject}>Subject</h3>
              </label>


              <label htmlFor="" className={style.contactUsFormLabel}>
                <textarea placeholder=' ' required type="text" className={style.contactUsFormLabelTextarea} />

                <h3 className={style.contactUsFormLabelMessage}>Message</h3>
              </label>

              <button type='submit' className={style.contactUsFormBtn}>send</button>
            </form>
          </div>

          <div className={style.contactAdress}>
            <img src={rect} alt="laptop" className={style.contactAdressImg} />

            <ul className={style.contactAdressList}>
              <li className={style.contactAdressListItem}>
                <a href='' className={style.contactAdressListItemLink}>
                  Street Avenue 21, CA
                </a>
              </li>
              <li className={style.contactAdressListItem}>
                <a href='' className={style.contactAdressListItemLink}>
                  +9 0283353
                </a>
              </li>
              <li className={style.contactAdressListItem}>
                <a href='' className={style.contactAdressListItemLink}>
                  info@default.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  </>);
};

export default Contact;