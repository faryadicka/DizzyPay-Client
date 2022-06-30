import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

//Layout
import AuthSideLayout from "../../components/AuthLayout/Index";

//assets
import styles from "../../styles/Login.module.css";
import SmartPhone from "../../assets/img/hp.png";
import Lock from "../../assets/img/lockauth.png";
import Email from "../../assets/img/mail.png";
import Eye from "../../assets/img/eye-crossed.png";

function Login() {
  const router = useRouter();
  // console.log(router);
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
        <form className={`${styles.contentForm} d-flex flex-column`}>
          <div className={styles.contentInput}>
            <Image src={Email} alt="emailimg" />
            <input type="email" name="email" placeholder="Enter your E-mail" />
          </div>
          <div className={styles.contentInput}>
            <Image src={Lock} alt="passimg" />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <Image src={Eye} alt="eye" className={styles.eyeCrossed} />
          </div>
          <p
            onClick={() => {
              router.push("/forgot");
            }}
            className={`${styles.forgotPass} text-end mt-3`}
          >
            Forgot password?
          </p>
          <button className={`${styles.contentButton} btn mt-5`}>Login</button>
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
