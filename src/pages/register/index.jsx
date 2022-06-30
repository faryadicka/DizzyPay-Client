import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

//assets
import styles from "../../styles/Register.module.css";
import AuthSideLayout from "../../components/AuthLayout/Index";
import Lock from "../../assets/img/lockauth.png";
import Email from "../../assets/img/mail.png";
import Eye from "../../assets/img/eye-crossed.png";
import Person from "../../assets/img/person.png";

//Request Axios
import { registerAxios } from "../../modules/auth";

const Register = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const body = {
      firstName,
      lastName,
      email,
      password,
    };
    registerAxios(body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const env = process.env.HOST;
  console.log("first:", firstName);
  console.log("last:", lastName);
  console.log("email:", email);
  console.log("password:", password);
  console.log(env);
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
        <form
          className={`${styles.contentForm} d-flex flex-column`}
          onSubmit={handleRegister}
        >
          <div className={styles.contentInput}>
            <Image src={Person} alt="firstName" />
            <input
              type="text"
              name="first"
              placeholder="Enter your firstname"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className={styles.contentInput}>
            <Image src={Person} alt="emailimg" />
            <input
              type="text"
              name="last"
              placeholder="Enter your lastname"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
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
            <Image src={Lock} alt="emailimg" />
            <input
              type="password"
              name="password"
              placeholder="Create your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Image src={Eye} alt="eye" className={styles.eyeCrossed} />
          </div>
          <button type="submit" className={`${styles.contentButton} btn mt-5`}>
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
