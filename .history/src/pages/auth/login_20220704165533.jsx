import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

//Layout
import AuthSideLayout from "../../components/AuthLayout/Index";

//ReduxAction
import { loginAction } from "../../redux/actionCreator/auth";

//assets
import styles from "../../styles/Login.module.css";
import Hide from "../../../public/image/hide.png";
import Show from "../../../public/image/show.png";
import ModalNavV2 from "../../components/ModalNavV2";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [password, setPassword] = useState("");
  const [errMsg, setErrMessage] = useState("");
  const [successMsg, setSuccessMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [login, setLogin] = useState(false);
  const dataLogin = useSelector((state) => state.auth.dataLogin);

  const handleLogin = (event) => {
    event.preventDefault();
    const body = {
      email,
      password,
    };
    dispatch(loginAction(body))
      .then((res) => {
        setSuccessMessage(res.value?.data.msg);
        setLogin(true);
        setModal(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setErrMessage(err.response?.data.msg);
        setModal(false);
        setLogin(false);
      });
  };
  return (
    <AuthSideLayout title="Login">
      <div className={`${styles.contentLogin} col-md-6`}>
        <h2>
          Start Accessing Banking Needs With All Devices and All Platforms With
          30.000+ Users
        </h2>
        <p className={`${styles.contentDesc} mt-md-5`}>
          Transfering money is eassier than ever, you can access FazzPay
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
        </p>
        <form
          className={`${styles.contentForm} d-flex flex-column`}
          onSubmit={handleLogin}
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
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
              placeholder="Enter your password"
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
          <p
            onClick={() => {
              router.push("/auth/forgot");
            }}
            className={`${styles.forgotPass} text-end mt-3`}
          >
            Forgot password?
          </p>
          {login ? null : (
            <p className="text-center text-danger mt-4 fw-bold">{`${errMsg}`}</p>
          )}
          <button
            // data-bs-toggle="modal"
            // data-bs-target="#loginModal"
            type={`${email && password ? "submit" : "button"}`}
            className={`${
              email && password ? styles.activeButton : styles.disableButton
            } btn mt-5`}
          >
            Login
          </button>
          <p className="text-center mt-5">
            Don’t have an account? Let’s{" "}
            <span
              className={styles.registerLink}
              onClick={() => {
                router.push("/auth/register");
              }}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
      {login ? (
        <ModalNavV2
          show={login}
          message={successMsg}
          button={dataLogin.pin === null ? "Create PIN" : "HOME"}
          path={dataLogin.pin === null ? "/auth/createpin" : "/home"}
          hide={() => {
            setLogin(false);
          }}
        />
      ) : null}
    </AuthSideLayout>
  );
}

export default Login;
