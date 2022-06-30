import Image from "next/image";

//assets
import styles from "../../styles/Register.module.css";
import AuthSideLayout from "../../components/AuthLayout/Index";
import Lock from "../../assets/img/lockauth.png";
import Email from "../../assets/img/mail.png";
import Eye from "../../assets/img/eye-crossed.png";
import Person from "../../assets/img/person.png";

const Register = () => {
  return (
    <AuthSideLayout title="Register">
      <div className={`${styles.contentRegister} col-md-6 col-12`}>
        <h2>
          Start Accessing Banking Needs With All Devices and All Platforms With
          30.000+ Users
        </h2>
        <p className={`${styles.contentDesc} mt-md-4`}>
          Transfering money is eassier than ever, you can access FazzPay
          wherever you are. Desktop, laptop, mobile phone? we cover all of that
          for you!
        </p>
        <form className={`${styles.contentForm} d-flex flex-column`}>
          <div className={styles.contentInput}>
            <Image src={Person} alt="firstName" />
            <input
              type="text"
              name="first"
              placeholder="Enter your firstname"
            />
          </div>
          <div className={styles.contentInput}>
            <Image src={Person} alt="emailimg" />
            <input type="text" name="last" placeholder="Enter your lastname" />
          </div>
          <div className={styles.contentInput}>
            <Image src={Email} alt="emailimg" />
            <input type="email" name="email" placeholder="Enter your E-mail" />
          </div>
          <div className={styles.contentInput}>
            <Image src={Lock} alt="emailimg" />
            <input
              type="password"
              name="password"
              placeholder="Create your password"
            />
            <Image src={Eye} alt="eye" className={styles.eyeCrossed} />
          </div>
          <button className={`${styles.contentButton} btn mt-5`}>
            Sign Up
          </button>
          <p className="text-center mt-5">
            Already have an account? Let’s{" "}
            <span
              className={styles.loginLink}
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </AuthSideLayout>
  );
};

export default Register;
