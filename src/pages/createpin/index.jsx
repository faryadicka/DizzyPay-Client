import { PinInput } from "react-input-pin-code";
import { useState } from "react";
import AuthSideLayout from "../../components/AuthLayout/Index";
import styles from "../../styles/CreatePin.module.css";

const CreatePin = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  console.log(values);
  return (
    <AuthSideLayout title="Create Pin">
      <div className={`${styles.contentPin} col-md-6 col-12`}>
        <h2>
          Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That
          You Created Yourself.
        </h2>
        <p className={`${styles.contentDesc} mt-md-4`}>
          Create 6 digits pin to secure all your money and your data in FazzPay
          app. Keep it secret and don’t tell anyone about your FazzPay account
          password and the PIN.
        </p>
        <form
          className={`${styles.contentForm} d-flex flex-column justify-content-center align-items-center mt-5`}
        >
          <PinInput
            size="lg"
            placeholder="_"
            values={values}
            onChange={(value, idx, values) => {
              setValues(values);
            }}
          />
          <button className={`${styles.contentButton} btn mt-5`}>
            Confirm
          </button>
        </form>
      </div>
    </AuthSideLayout>
  );
};

export default CreatePin;
