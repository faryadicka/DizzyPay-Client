import styles from "../../styles/Profile.module.css";
import LoggedinLayout from "../../components/LoggedInLayout/index";
import Image from "next/image";
import { updateFullNameAxios } from "../../modules/auth";
import { getProfileAction } from "../../redux/actionCreator/auth";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";

const EditName = () => {
  const id = useSelector((state) => state.auth.dataLogin?.id);
  const token = useSelector((state) => state.auth.dataLogin?.token);
  const router = useRouter();
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [changeButton, setChangeButton] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleUpdateFullName = (e) => {
    e.preventDefault();
    const body = {
      firstName,
      lastName,
    };
    updateFullNameAxios(id, body, token)
      .then((res) => {
        // console.log(res);
        setSuccessMsg(res.data?.msg);
        setIsError(false);
        setShowMsg(true);
        setFirstName("");
        setLastName("");
        setChangeButton(true);
        dispatch(getProfileAction(id, token))
      })
      .catch((err) => {
        console.log(err);
        setErrMsg(err.response?.data.msg);
        setIsError(true);
        setShowMsg(true);
        setFirstName("");
        setLastName("");
      });
  };
  return (
    <LoggedinLayout title="Change Password">
      <div className={`col-12 col-md-9 ${styles.containerProfile}`}>
        <h3>Edit Full Name</h3>
        <p className="my-4">Edit your full name with the real name!</p>
        <form
          className={`${styles.contentForm} mt-5 d-flex flex-column justify-content-center align-items-center `}
          onSubmit={handleUpdateFullName}
        >
          <div className={`col-12 ${styles.contentInputPhone}`}>
            <Image
              width={20}
              height={20}
              src={"/image/user.png"}
              alt="passimg"
            />
            <input
              className="ms-2"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className={`col-12 ${styles.contentInputPhone}`}>
            <Image
              width={20}
              height={20}
              src={"/image/user.png"}
              alt="passimg"
            />
            <input
              className="ms-2"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
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
              type={`${firstName && lastName ? "submit" : "button"}`}
              className={`${
                firstName && lastName
                  ? styles.activeButton
                  : styles.disableButton
              } btn mt-5`}
            >
              Edit Full Name
            </button>
          )}
        </form>
      </div>
    </LoggedinLayout>
  );
};

export default EditName;
