import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import AuthSideLayout from "../../../components/AuthLayout/Index";
import styles from "../../../styles/NewPass.module.css";
import Hide from "../../../../public/image/hide.png";
import Show from "../../../../public/image/show.png";
import { resetPassAxios } from "../../../modules/auth";

const NewPassword = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const handleResetPassword = (e) => {
    e.preventDefault();
    const body = {
      keysChangePassword: id,
      newPassword: password,
      confirmPassword: password1,
    };
    resetPassAxios(body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(body);
  };
  console.log(id);
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
          onSubmit={handleResetPassword}
        >
          {/* 1 */}
          <div className={styles.contentInput}>
            <Image
              width={25}
              height={25}
              src={"/image/lockauth.png"}
              alt="passimg"
            />
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
          {/* 2 */}
          <div className={styles.contentInput}>
            <Image
              width={25}
              height={25}
              src={"/image/lockauth.png"}
              alt="passimg"
            />
            <input
              type={`${showPass1 ? "text" : "password"}`}
              name="password"
              placeholder="Create new password"
              value={password1}
              onChange={(e) => {
                setPassword1(e.target.value);
              }}
            />
            <Image
              onClick={() => {
                setShowPass1(!showPass1);
              }}
              src={showPass1 ? Show : Hide}
              alt="eye"
              className={styles.eyeCrossed}
            />
          </div>
          <button
            type={`${password && password1 ? "submit" : "button"}`}
            className={`${
              password && password1 ? styles.activeButton : styles.disableButton
            } btn mt-5`}
          >
            Reset Password
          </button>
        </form>
      </div>
    </AuthSideLayout>
  );
};

export default NewPassword;
