import Image from "next/image";

import AuthSideLayout from "../../../components/AuthLayout/Index";

import styles from "../../../styles/Forgot.module.css";
import { useState } from "react";
import { forgotPassAxios } from "../../../modules/auth";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrorMsg] = useState("");
  const handleSendEmail = (e) => {
    e.preventDefault();
    const body = {
      email,
      linkDirect: "https://dizzy-pay-client.vercel.app/auth/forgot",
    };
    forgotPassAxios(body)
      .then((res) => {
        setShowMsg(true);
        setIsError(false);
      })
      .catch((err) => {
        setErrorMsg(err.response?.data.msg);
        setShowMsg(true);
        setIsError(true);
      });
  };
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
        <form
          className={`${styles.contentForm} d-flex flex-column`}
          onSubmit={handleSendEmail}
        >
          <div className={styles.contentInput}>
            <Image
              width={25}
              height={25}
              src={"/image/mail.png"}
              alt="emailimg"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          {showMsg ? (
            <>
              {isError ? (
                <p className="fw-bold text-danger text-center mt-2">{errMsg}</p>
              ) : (
                <p className="fw-bold text-center text-success mt-2 ">
                  Process success, please check your email!
                </p>
              )}
            </>
          ) : null}
          <button
            type={`${email ? "submit" : "button"}`}
            className={`${
              email ? styles.activeButton : styles.disableButton
            } btn mt-3`}
          >
            Confirm
          </button>
        </form>
      </div>
    </AuthSideLayout>
  );
};

export default Forgot;
