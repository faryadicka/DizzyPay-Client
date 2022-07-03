import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Loggedin.module.css";

import ModalInput from "../ModalInput";
import ModalInputV2 from "../ModalInputV2";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardNotif from "../CardNotif";
import { useRouter } from "next/router";
import { topUpAction } from "../../redux/actionCreator/auth";

const LoggedinLayout = ({ children, title }) => {
  const [modal, setModal] = useState(false);
  const [dropdown, showDropdown] = useState(false);
  const [topUp, setTopUp] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useSelector((state) => state.auth.dataLogin.token);
  const dataInfo = useSelector((state) => state.auth.dataInfo);
  const redirectUrl = useSelector((state) => state.auth.dataTopUp);

  const handleTopUp = (e) => {
    e.preventDefault();
    const body = {
      amount: topUp,
    };
    dispatch(topUpAction(body, token))
      .then((res) => {
        console.log(res);
        setIsSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
      });
  };
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.bgColor}>
        <header>
          <nav className={`${styles.navBar}`}>
            <div className="d-flex container justify-content-between py-5">
              <h3
                onClick={() => {
                  router.push("/");
                }}
                className={styles.brandName}
              >
                DizzyPay
              </h3>
              <div className="d-flex align-items-center gap-4">
                <div>
                  <Image
                    width={60}
                    height={60}
                    src={
                      dataInfo.data !== undefined
                        ? `https://fazzpay.herokuapp.com/uploads/${dataInfo.data.image}`
                        : "/image/avadef.png"
                    }
                    alt="ava"
                    className={styles.clickAble}
                  />
                </div>
                <div className={`${styles.infoNav}`}>
                  <p className="fw-bold">
                    {dataInfo
                      ? dataInfo.data.firstName + " " + dataInfo.data.lastName
                      : "-"}
                  </p>
                  <p>{dataInfo ? dataInfo.data.noTelp : "-"}</p>
                </div>
                <div className="position-relative">
                  <Image
                    width={20}
                    height={20}
                    src={"/image/bell.png"}
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
                  <Image
                    width={20}
                    height={20}
                    src={"/image/griddisable.svg"}
                    alt="logout"
                  />
                  <button
                    onClick={() => {
                      router.push("/home");
                    }}
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
                  <Image
                    width={20}
                    height={20}
                    src={"/image/arrow-up.svg"}
                    alt="logout"
                  />
                  <button
                    onClick={() => {
                      router.push("/transfer");
                    }}
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
                  <Image
                    width={20}
                    height={20}
                    src={"/image/plus.svg"}
                    alt="logout"
                  />
                  <button
                    onClick={() => {
                      setModal(true);
                    }}
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
                  <Image
                    width={20}
                    height={20}
                    src={"/image/user.svg"}
                    alt="logout"
                  />
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
                  <Image
                    width={20}
                    height={20}
                    src={"/image/log-out.svg"}
                    alt="logout"
                  />
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
      <ModalInputV2
        show={modal}
        title="Top Up"
        desc="Enter the amount of money, and click submit"
        button="Submit"
        handle={handleTopUp}
        status={isSuccess}
        hide={() => {
          setModal(false);
        }}
      >
        {isSuccess ? (
          <>
            <button
              onClick={() => {
                setIsSuccess(false);
              }}
              className={`${styles.buttonURL} btn btn-primary`}
            >
              <a
                className="text-white text-decoration-none"
                href={redirectUrl.data.redirectUrl}
                target="_blank"
                rel="noreferrer"
              >
                Go to Link
              </a>
            </button>
          </>
        ) : (
          <input
            type="number"
            name="topup"
            className={styles.inputTopup}
            value={topUp}
            onChange={(e) => {
              setTopUp(e.target.value);
            }}
          />
        )}
      </ModalInputV2>
    </>
  );
};

export default LoggedinLayout;
