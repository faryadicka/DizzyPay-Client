import styles from "../../styles/Profile.module.css";
import LoggedinLayout from "../../components/LoggedInLayout/index";
import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { updatePhoneNumberAxios } from "../../modules/auth";

const EditPhone = () => {
  const [phone, setPhone] = useState("");
  const id = useSelector((state) => state.auth.dataLogin?.id);
  const token = useSelector((state) => state.auth.dataLogin?.token);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleUpdatePhoneNumber = (e) => {
    e.preventDefault();
    const body = {
      noTelp: phone,
    };
    updatePhoneNumberAxios(id, body, token)
      .then((res) => {
        console.log(res);
        setShowMsg(true);
        setSuccessMsg("Edit number phone success");
        setPhone("");
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
        setErrMsg("Edit number phone failed");
        setShowMsg(true);
        setPhone("");
        setIsError(false);
      });
  };

  return (
    <LoggedinLayout title="Change Password">
      <div className={`col-12 col-md-9 ${styles.containerProfile}`}>
        <h3>Edit Phone Number</h3>
        <p className="mt-4">
          Add at least one phone number for the transfer <br /> ID so you can
          start transfering your money to <br /> another user.
        </p>
        <form
          className={`${styles.contentForm} d-flex flex-column justify-content-center align-items-center `}
          onSubmit={handleUpdatePhoneNumber}
        >
          <div className={`col-12 ${styles.contentInputPhone}`}>
            <Image
              width={20}
              height={20}
              src={"/image/phone.svg"}
              alt="passimg"
            />
            <input
              className="ms-2"
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          {showMsg ? (
            <>
              {isError ? (
                <p className="text-danger fw-bold mt-3">{`${errMsg}!`}</p>
              ) : (
                <p className="text-success fw-bold mt-3">{`${successMsg}!`}</p>
              )}
            </>
          ) : null}
          <button
            type={`${phone ? "submit" : "button"}`}
            className={`${
              phone ? styles.activeButton : styles.disableButton
            } btn mt-2`}
          >
            Edit Phone Number
          </button>
        </form>
      </div>
    </LoggedinLayout>
  );
};

export default EditPhone;
