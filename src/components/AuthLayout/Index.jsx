import Head from "next/head";
import Image from "next/image";

//assets
import styles from "../../styles/AuthSideBar.module.css";
import SmartPhone from "../../../public/image/hp.png";

const AuthSideLayout = ({ title, children }) => {
  return (
    <div className={styles.containerSideBar}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="row">
        <div className={`col-md-6 container ${styles.sideBar}`}>
          <h3 className={`text-white mt-md-5`}>DizzyPay</h3>
          <Image src={SmartPhone} alt="smartPhone" />
          <h3 className="text-white">App that Covering Banking Needs.</h3>
          <p className={`text-white mt-md-3 ${styles.sideDesc}`}>
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world trends
            5000+ users registered in Zwallet everyday with worldwide users
            coverage.
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthSideLayout;
