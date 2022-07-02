import { useState } from "react";
import styles from "../../styles/Profile.module.css";
import LoggedinLayout from "../../components/LoggedInLayout/index";
import Hide from "../../assets/img/hide.png";
import Show from "../../assets/img/show.png";
import Lock from "../../assets/img/lockauth.png";
import Image from "next/image";

const ChangePassword = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  return (
    <LoggedinLayout title="Change Password">
      <div className={`col-12 col-md-9 ${styles.containerProfile}`}>
        <h3>Change Password</h3>
        <p className="mt-4">
          You must enter your current password and then <br /> type your new
          password twice.
        </p>
        <form
          className={`${styles.contentForm} d-flex flex-column justify-content-center`}
          // onSubmit={handleLogin}
        >
          {/* 1 */}
          <div className={`col-12 ${styles.contentInput}`}>
            <Image src={Lock} alt="passimg" />
            <input
              type={`${showPass ? "text" : "password"}`}
              name="password"
              placeholder="Current password"
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
          <div className={`col-12 ${styles.contentInput}`}>
            <Image src={Lock} alt="passimg" />
            <input
              type={`${showPass1 ? "text" : "password"}`}
              name="password"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
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
          {/* 3 */}
          <div className={`col-12 ${styles.contentInput}`}>
            <Image src={Lock} alt="passimg" />
            <input
              type={`${showPass2 ? "text" : "password"}`}
              name="password"
              placeholder="Create new password"
              value={createPassword}
              onChange={(e) => {
                setCreatePassword(e.target.value);
              }}
            />
            <Image
              onClick={() => {
                setShowPass2(!showPass2);
              }}
              src={showPass2 ? Show : Hide}
              alt="eye"
              className={styles.eyeCrossed}
            />
          </div>
        </form>
      </div>
    </LoggedinLayout>
  );
};

export default ChangePassword;
