import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

//Layout
import AuthSideLayout from "../../components/AuthLayout/Index";

//ReduxAction
import { loginAction } from "../../redux/actionCreator/auth";

//assets
import styles from "../../styles/Login.module.css";
import SmartPhone from "../../assets/img/hp.png";
import Lock from "../../assets/img/lockauth.png";
import Email from "../../assets/img/mail.png";
import Eye from "../../assets/img/eye-crossed.png";
import Hide from "../../assets/img/hide.png";
import Show from "../../assets/img/show.png";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMessage] = useState("");
  const [successMsg, setSuccessMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [login, setLogin] = useState(false);

  // const login = useSelector((state) => state.auth.isLoggedin);

  const handleLogin = (event) => {
    event.preventDefault();
    const body = {
      email,
      password,
    };
    dispatch(loginAction(body))
      .then((res) => {
        setSuccessMessage(res.value.data.msg);
        setLogin(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setErrMessage(err.response.data.msg);
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
            <Image src={Email} alt="emailimg" />
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
            <Image src={Lock} alt="passimg" />
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
              router.push("/forgot");
            }}
            className={`${styles.forgotPass} text-end mt-3`}
          >
            Forgot password?
          </p>
          {login ? (
            <>
              <p className="text-center text-success mt-4 fw-bold">
                {`${successMsg}`}
              </p>
            </>
          ) : (
            <p className="text-center text-danger mt-4 fw-bold">{`${errMsg}`}</p>
          )}
          <button type="submit" className={`${styles.contentButton} btn mt-5`}>
            Login
          </button>
          <p className="text-center mt-5">
            Don’t have an account? Let’s{" "}
            <span
              className={styles.registerLink}
              onClick={() => {
                router.push("/register");
              }}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </AuthSideLayout>
  );
}

export default Login;
