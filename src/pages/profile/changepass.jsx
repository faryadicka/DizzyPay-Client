import { useState } from "react";
import styles from "../../styles/Profile.module.css";
import LoggedinLayout from "../../components/LoggedInLayout/index";
import Hide from "../../../public/image/hide.png";
import Show from "../../../public/image/show.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { updatePasswordAxios } from "../../modules/auth";

const ChangePassword = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [changeButton, setChangeButton] = useState(false);
  const token = useSelector((state) => state.auth.dataLogin?.token);
  const id = useSelector((state) => state.auth.dataLogin?.id);
  const router = useRouter();

  const handleChangePassword = (e) => {
    e.preventDefault();
    const body = {
      oldPassword: password,
      newPassword,
      confirmPassword: createPassword,
    };
    updatePasswordAxios(id, body, token)
      .then((res) => {
        console.log(res);
        setIsError(false);
        setChangeButton(true);
        setShowStatus(true);
      })
      .catch((err) => {
        console.log(err);
        setErrMsg(err.response?.data.msg);
        setIsError(true);
        setShowStatus(true);
      });
  };

  return (
    <LoggedinLayout title="Change Password">
      <div className={`col-12 col-md-9 ${styles.containerProfile}`}>
        <h3>Change Password</h3>
        <p className="mt-4">
          You must enter your current password and then <br /> type your new
          password twice.
        </p>
        <form
          onSubmit={handleChangePassword}
          className={`${styles.contentForm} d-flex flex-column justify-content-center`}
          // onSubmit={handleLogin}
        >
          {/* 1 */}
          <div className={`col-12 ${styles.contentInput}`}>
            <Image
              width={25}
              height={25}
              src={"/image/lockauth.png"}
              alt="passimg"
            />
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
            <Image
              width={25}
              height={25}
              src={"/image/lockauth.png"}
              alt="passimg"
            />
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
            <Image
              width={25}
              height={25}
              src={"/image/lockauth.png"}
              alt="passimg"
            />
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
          {showStatus ? (
            <>
              {isError ? (
                <p className="mt-2 text-center fw-bold text-danger">{`${errMsg} !`}</p>
              ) : (
                <p className="mt-2 text-center fw-bold text-success">
                  Change password is successful!
                </p>
              )}
            </>
          ) : null}
          {changeButton ? (
            <button
              onClick={() => {
                router.push("/home");
                setTimeout(() => {
                  setChangeButton(false);
                }, 2000);
              }}
              className="btn btn-primary mt-4 rounded-3 px-3"
            >
              Back to Home
            </button>
          ) : (
            <button
              type="submit"
              className={`${
                password && newPassword && createPassword
                  ? styles.activeButton
                  : styles.disableButton
              } btn mt-3`}
            >
              Change Password
            </button>
          )}
        </form>
      </div>
    </LoggedinLayout>
  );
};

export default ChangePassword;
