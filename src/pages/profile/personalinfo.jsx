import styles from "../../styles/Profile.module.css";
import LoggedinLayout from "../../components/LoggedInLayout/index";
import { useSelector } from "react-redux";

import { useRouter } from "next/router";

const PersonalInfo = () => {
  const router = useRouter();
  const dataInfo = useSelector((state) => state.auth.dataInfo);
  console.log(dataInfo);
  return (
    <LoggedinLayout title="Personal Info">
      <div className={`col-12 col-md-9 ${styles.containerProfile}`}>
        <h3>Personal Information</h3>
        <p className="mt-4">
          We got your personal information from the sign <br /> up proccess. If
          you want to make changes on <br />
          your information, contact our support.
        </p>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <div>
            First Name
            <section className="fw-bold mt-1">
              {dataInfo ? dataInfo.data.firstName : ""}
            </section>
          </div>
        </div>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <div>
            Last Name
            <section className="fw-bold mt-1">
              {dataInfo ? dataInfo.data.lastName : ""}
            </section>
          </div>
        </div>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <div>
            Verified E-mail
            <section className="fw-bold mt-1">
              {dataInfo ? dataInfo.data.email : ""}
            </section>
          </div>
        </div>
        <div
          className={`mb-3 d-flex justify-content-between align-items-center ${styles.cardDetails}`}
        >
          <div>
            Phone Number
            <section className="fw-bold mt-1">
              {dataInfo ? dataInfo.data.noTelp : ""}
            </section>
          </div>
          <button
            onClick={() => {
              router.push("/profile/editphone");
            }}
            className="btn text-primary mt-3"
          >
            Manage
          </button>
        </div>
      </div>
    </LoggedinLayout>
  );
};

export default PersonalInfo;
