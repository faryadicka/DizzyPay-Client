import styles from "../../styles/Profile.module.css";
import LoggedinLayout from "../../components/LoggedInLayout/index";
import { PinInput } from "react-input-pin-code";
import { useState } from "react";

const ChangePin = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const [match, setMatch] = useState(false);

  const handleMatchPin = (e) => {
    e.preventDefault();
    console.log("matching pin");
    setMatch(true);
  };

  const hanldeChangePin = (e) => {
    e.preventDefault();
    console.log("New Pin");
    setMatch(false);
  };

  return (
    <LoggedinLayout title="Change Password">
      <div className={`col-12 col-md-9 ${styles.containerProfile}`}>
        <h3>Change PIN</h3>
        <p className="mt-4">
          {!match
            ? "Enter your current 6 digits Zwallet PIN below to continue to the next steps."
            : "Type your new 6 digits security PIN to use in DizzyPay."}
        </p>
        <form
          onSubmit={match ? hanldeChangePin : handleMatchPin}
          className={`${styles.contentFormPin} d-flex flex-column justify-content-center align-items-center `}
        >
          <PinInput
            size="lg"
            placeholder="_"
            values={values}
            onChange={(value, idx, values) => {
              setValues(values);
            }}
          />
          <button
            type={`${
              values[0] &&
              values[1] &&
              values[2] &&
              values[3] &&
              values[4] &&
              values[5]
                ? "submit"
                : "button"
            }`}
            className={`${
              values[0] &&
              values[1] &&
              values[2] &&
              values[3] &&
              values[4] &&
              values[5]
                ? styles.activeButton
                : styles.disableButton
            } btn mt-5`}
          >
            {match ? "Change Pin" : "Continue"}
          </button>
        </form>
      </div>
    </LoggedinLayout>
  );
};

export default ChangePin;
