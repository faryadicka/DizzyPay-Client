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
import ModalInput from "../ModalInput";
import { useState } from "react";
import CardNotif from "../CardNotif";
import { useRouter } from "next/router";

const LoggedinLayout = ({ children, title }) => {
  const router = useRouter();
  const [dropdown, showDropdown] = useState(false);
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
                <div className="position-relative">
                  <Image
                    src={Bell}
                    alt="bell"
                    className={styles.clickAble}
                    onClick={() => {
                      showDropdown(!dropdown);
                    }}
                  />
                  {dropdown ? (
                    <div className={`${styles.dropdown}`}>
                      <CardNotif />
                      <CardNotif />
                      <CardNotif />
                      <CardNotif />
                      <CardNotif />
                    </div>
                  ) : null}
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
                  <button
                    className={`${
                      false ? styles.activeNav : styles.disableNav
                    }`}
                  >
                    Dashboard
                  </button>
                </div>
                <div
                  className={`d-flex justify-content-start ${styles.navMenu}`}
                >
                  <Image src={Arrow} alt="logout" />
                  <button
                    className={`${
                      false ? styles.activeNav : styles.disableNav
                    }`}
                  >
                    Transfer
                  </button>
                </div>
                <div
                  className={`d-flex justify-content-start ${styles.navMenu}`}
                >
                  <Image src={Plus} alt="logout" />
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#topUpModal"
                    className={`${
                      false ? styles.activeNav : styles.disableNav
                    }`}
                  >
                    Top Up
                  </button>
                </div>
                <div
                  className={`d-flex justify-content-start ${styles.navMenu}`}
                >
                  <Image src={User} alt="logout" />
                  <button
                    onClick={() => {
                      router.push("/profile");
                    }}
                    className={`${
                      false ? styles.activeNav : styles.disableNav
                    }`}
                  >
                    Profile
                  </button>
                </div>
                <div
                  className={`d-flex justify-content-start ${styles.logout}`}
                >
                  <Image src={Logout} alt="logout" />
                  <button
                    className={`${
                      false ? styles.activeNav : styles.disableNav
                    }`}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
            {children}
          </div>
        </main>
        <footer className={`${styles.footer}`}>
          <div className="d-flex container justify-content-between py-5 text-white">
            <p>2022 DizzyPay. All right reserved.</p>
            <div className="d-flex gap-3">
              <p>2022 DizzyPay. All right reserved.</p>
              <p>contact@dizzypay.com</p>
            </div>
          </div>
        </footer>
      </div>
      <ModalInput
        id="topUpModal"
        title="Topup"
        desc="Enter the amount of money, and click submit"
        button="Submit"
      >
        <input
          type="number"
          name="topup"
          className={styles.inputTopup}
          placeholder="_______________________________________"
        />
      </ModalInput>
    </>
  );
};

export default LoggedinLayout;
