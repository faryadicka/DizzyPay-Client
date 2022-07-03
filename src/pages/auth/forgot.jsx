import Image from "next/image";

import AuthSideLayout from "../../components/AuthLayout/Index";

import styles from "../../styles/Forgot.module.css";
import Email from "../../assets/img/mail.png";
import { useState } from "react";

const Forgot = () => {
  const [email, setEmail] = useState();
  return (
    <AuthSideLayout title="Forgot Pass">
      <div className={`${styles.contentForgot} col-md-6 col-12`}>
        <h2>
          Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password
          In a Minutes.
        </h2>
        <p className={`${styles.contentDesc} mt-md-4`}>
          To reset your password, you must type your e-mail and we will send a
          link to your email and you will be directed to the reset password
          screens.
        </p>
        <form className={`${styles.contentForm} d-flex flex-column`}>
          <div className={styles.contentInput}>
            <Image src={Email} alt="emailimg" />
            <input
              type="email"
              name="email"
              placeholder="Enter your E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button
            type={`${email ? "submit" : "button"}`}
            className={`${
              email ? styles.activeButton : styles.disableButton
            } btn mt-5`}
          >
            Confirm
          </button>
        </form>
      </div>
    </AuthSideLayout>
  );
};

export default Forgot;
