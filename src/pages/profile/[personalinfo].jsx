import styles from "../../styles/Profile.module.css";
import LoggedinLayout from "../../components/LoggedInLayout/index";

const PersonalInfo = () => {
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
          <p>
            title
            <section>Content</section>
          </p>
        </div>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <p>
            title
            <section>Content</section>
          </p>
        </div>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <p>
            title
            <section>Content</section>
          </p>
        </div>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <p>
            title
            <section>Content</section>
          </p>
        </div>
      </div>
    </LoggedinLayout>
  );
};

export default PersonalInfo;
