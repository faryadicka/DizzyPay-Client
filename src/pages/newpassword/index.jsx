import Image from "next/image";
import { useState } from "react";

import AuthSideLayout from "../../components/AuthLayout/Index";

import styles from "../../styles/NewPass.module.css";
import Lock from "../../assets/img/lockauth.png";
import Hide from "../../assets/img/hide.png";
import Show from "../../assets/img/show.png";

const NewPassword = () => {
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <AuthSideLayout title="New Password">
      <div className={`${styles.contentNewPass} col-md-6`}>
        <h2>
          Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password
          In a Minutes.
        </h2>
        <p className={`${styles.contentDesc} mt-md-5`}>
          Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password
          In a Minutes.
        </p>
        <form
          className={`${styles.contentForm} d-flex flex-column`}
          // onSubmit={handleLogin}
        >
          <div className={styles.contentInput}>
            <Image src={Lock} alt="passimg" />
            <input
              type={`${showPass ? "text" : "password"}`}
              name="password"
              placeholder="Create new password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Image
              onClick={() => {
                setShowPass(!showPass);
              }}
              src={showPass ? Show : Hide}
              alt="eye"
              className={styles.eyeCrossed}
            />
          </div>
          <div className={styles.contentInput}>
            <Image src={Lock} alt="passimg" />
            <input
              type={`${showPass ? "text" : "password"}`}
              name="password"
              placeholder="Create new password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Image
              onClick={() => {
                setShowPass(!showPass);
              }}
              src={showPass ? Show : Hide}
              alt="eye"
              className={styles.eyeCrossed}
            />
          </div>
          <button
            type="submit"
            className={`${styles.contentButton} fw-bold btn mt-5`}
          >
            Reset password
          </button>
        </form>
      </div>
    </AuthSideLayout>
  );
};

export default NewPassword;
