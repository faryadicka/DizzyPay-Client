import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Loggedin.module.css";

import Ava from "../../assets/img/avanav.png";
import Bell from "../../assets/img/bell.png";
import Arrow from "../../assets/img/arrow-up.svg";
import Grid from "../../assets/img/griddisable.svg";
import Plus from "../../assets/img/plus.svg";
import Logout from "../../assets/img/log-out.svg";
import User from "../../assets/img/user.svg";

const LoggedinLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.bgColor}>
        <header>
          <nav className={`${styles.navBar}`}>
            <div className="d-flex container justify-content-between py-5">
              <h3 className={styles.brandName}>DizzyPay</h3>
              <div className="d-flex align-items-center gap-4">
                <div>
                  <Image
                    src={Ava}
                    alt="ava"
                    width={`50px`}
                    height={`50px`}
                    className={styles.clickAble}
                  />
                </div>
                <div className={`${styles.infoNav}`}>
                  <p className="fw-bold">Ferry Aryadicka</p>
                  <p>+62 8988 2320 88</p>
                </div>
                <div>
                  <Image src={Bell} alt="bell" className={styles.clickAble} />
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className={`${styles.main}`}>
          <div className="container d-flex flex-column flex-md-row gap-5 my-5">
            <div className={`col-md-3 col-12 text-center ${styles.navMain}`}>
              <div className="d-flex flex-row flex-md-column justify-content-between ">
                <div
                  className={`d-flex justify-content-start ${styles.navMenu}`}
                >
                  <Image src={Grid} alt="logout" />
                  <p
                    className={`${
                      false ? styles.activeNav : styles.disableNav
                    }`}
                  >
                    Dashboard
                  </p>
                </div>
                <div
                  className={`d-flex justify-content-start ${styles.navMenu}`}
                >
                  <Image src={Arrow} alt="logout" />
                  <p
                    className={`${
                      false ? styles.activeNav : styles.disableNav
                    }`}
                  >
                    Transfer
                  </p>
                </div>
                <div
                  className={`d-flex justify-content-start ${styles.navMenu}`}
                >
                  <Image src={Plus} alt="logout" />
                  <p
                    className={`${
                      false ? styles.activeNav : styles.disableNav
                    }`}
                  >
                    Top Up
                  </p>
                </div>
                <div
                  className={`d-flex justify-content-start ${styles.navMenu}`}
                >
                  <Image src={User} alt="logout" />
                  <p
                    className={`${
                      false ? styles.activeNav : styles.disableNav
                    }`}
                  >
                    Profile
                  </p>
                </div>
                <div
                  className={`d-flex justify-content-start ${styles.logout}`}
                >
                  <Image src={Logout} alt="logout" />
                  <p
                    className={`${
                      false ? styles.activeNav : styles.disableNav
                    }`}
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
            {children}
          </div>
        </main>
        <footer className={`${styles.footer}`}>
          <div className="d-flex container justify-content-between py-5 text-white">
            <p>2020 FazzPay. All right reserved.</p>
            <div className="d-flex gap-3">
              <p>2020 FazzPay. All right reserved.</p>
              <p>contact@fazzpay.com</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LoggedinLayout;
