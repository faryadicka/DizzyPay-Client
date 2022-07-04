import Image from "next/image";
import styles from "../../styles/Profile.module.css";
import LoggedinLayout from "../../components/LoggedInLayout/index";
import { PinInput } from "react-input-pin-code";
import { useState } from "react";
import { useSelector } from "react-redux";
import { checkPinAxios, updatePinAxios } from "../../modules/transfer";
import { useRouter } from "next/router";

const ChangePin = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const [match, setMatch] = useState(false);
  const [isError, setIsError] = useState(false);
  const [show, setShow] = useState(false);
  const [changeButton, setChangeButton] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const token = useSelector((state) => state.auth.dataLogin.token);
  const id = useSelector((state) => state.auth.dataLogin.id);
  const newPin = values.join("");
  const router = useRouter();

  const handleMatchPin = (e) => {
    e.preventDefault();
    checkPinAxios(newPin, token)
      .then((res) => {
        console.log(res);
        setMatch(true);
        setValues(["", "", "", "", "", ""]);
      })
      .catch((err) => {
        console.log(err);
        setShow(true);
        setMatch(false);
      });
  };

  const hanldeChangePin = (e) => {
    e.preventDefault();
    const body = {
      pin: newPin,
    };
    updatePinAxios(id, body, token)
      .then((res) => {
        console.log(res);
        setSuccessMsg(res.data?.msg);
        setIsError(false);
        setShow(true);
        setValues(["", "", "", "", "", ""]);
        setChangeButton(true);
      })
      .catch((err) => {
        console.log(err);
        setErrMsg(err.response?.data.msg);
        setIsError(true);
        setShow(true);
      });
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
            type="password"
            size="lg"
            placeholder="_"
            values={values}
            onChange={(value, idx, values) => {
              setValues(values);
            }}
          />
          {show ? (
            <>
              {isError ? (
                <p className="mt-3 fw-bold text-danger">{errMsg}</p>
              ) : (
                <p className="mt-3 fw-bold text-success">{successMsg}</p>
              )}
              {match ? null : (
                <p className="mt-3 fw-bold text-danger">PIN does not match!</p>
              )}
            </>
          ) : null}
          {changeButton ? (
            <button
              onClick={() => {
                router.push("/home");
                setTimeout(() => {
                  setChangeButton(false);
                }, 2000);
              }}
              className="btn btn-primary mt-4 rounded-3"
            >
              Back to Home
            </button>
          ) : (
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
              } btn mt-4`}
            >
              {match ? "Change Pin" : "Continue"}
            </button>
          )}
        </form>
      </div>
    </LoggedinLayout>
  );
};

export default ChangePin;
