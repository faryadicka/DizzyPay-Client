import Image from "next/image";
import { PinInput } from "react-input-pin-code";
import { useState } from "react";
import { useRouter } from "next/router";
import AuthSideLayout from "../../components/AuthLayout/Index";
import styles from "../../styles/CreatePin.module.css";
import Success from "../../assets/img/success.svg";

const CreatePin = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  return (
    <AuthSideLayout title="Create Pin">
      <div className={`${styles.contentPin} col-md-6 col-12`}>
        {!isSuccess ? (
          <>
            <h2>
              Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN
              That You Created Yourself.
            </h2>
            <p className={`${styles.contentDesc} mt-md-4`}>
              Create 6 digits pin to secure all your money and your data in
              FazzPay app. Keep it secret and don’t tell anyone about your
              FazzPay account password and the PIN.
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
                Confirm
              </button>
            </form>
          </>
        ) : (
          <>
            <Image src={Success} alt="success" />
            <h2>Your PIN Was Successfully Created</h2>
            <p className={`${styles.contentDesc} mt-md-4`}>
              Your PIN was successfully created and you can now access all the
              features in FazzPay.
            </p>
            <button
              onClick={() => {
                router.push("/home");
              }}
              className={`btn mt-5 ${styles.activeButton}`}
            >
              Go to Dashboard
            </button>
          </>
        )}
      </div>
    </AuthSideLayout>
  );
};

export default CreatePin;
