import { PinInput } from "react-input-pin-code";
import { useState, useEffect } from "react";

import LoggedinLayout from "../../../components/LoggedInLayout/index";
import styles from "../../../styles/Transfer.module.css";
import Image from "next/image";
import Success from "../../../../public/image/success.svg";
import Failed from "../../../../public/image/success.svg";
import ModalInputV2 from "../../../components/ModalInputV2";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getTransferDataAction } from "../../../redux/actionCreator/auth";
import { checkPinAxios } from "../../../modules/transfer";

const TransferConfirm = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const [isMoved, setIsMoved] = useState(false);
  const [status, setStatus] = useState(false);
  const [isError, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const nominal = useSelector((state) => state.auth.nominal);
  const notes = useSelector((state) => state.auth.notes);
  const balance = useSelector((state) => state.auth.dataInfo.data.balance);
  const receiverInfo = useSelector((state) => state.auth.receiverInfo);
  const token = useSelector((state) => state.auth.dataLogin.token);
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed).toUTCString().slice(0, 25);
  const newPin = values.join("");

  const handleTransfer = (e) => {
    e.preventDefault();
    const body = {
      receiverId: id,
      amount: Number(nominal),
      notes,
    };
    checkPinAxios(newPin, token)
      .then((res) => {
        dispatch(getTransferDataAction(body, token));
        console.log(res);
        setError(false);
        setStatus(true);
        isMoved(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  console.log(router);
  return (
    <LoggedinLayout title="Transfer">
      <div className={`col-12 col-md-9 ${styles.containerTransfer}`}>
        <div className="row justify-content-center py-3">
          {status ? (
            <>
              {isError ? (
                <div className="col-md-12 text-center">
                  <Image src={Success} alt="success" />
                  <h5>Transfer Success</h5>
                </div>
              ) : (
                <div className="col-md-12 text-center">
                  <Image src={Failed} alt="success" />
                  <h5>Transfer Failed</h5>
                </div>
              )}
            </>
          ) : null}
        </div>
        {!isMoved ? (
          <div className="row px-2">
            <h5>Transfer Money</h5>
            <div className={`d-flex mt-2 gap-4 ${styles.cardTransfer}`}>
              <Image
                width={50}
                height={50}
                src={
                  receiverInfo
                    ? receiverInfo.data.image === null
                      ? (receiverInfo.data.image = "/image/avadef.png")
                      : "/image/avadef.png"
                    : "/image/avadef.png"
                }
                alt="avatarTransfer"
              />
              <div className={`${styles.titleTransfer}`}>
                <p className="fw-bold">
                  {receiverInfo
                    ? receiverInfo.data.firstName +
                      " " +
                      receiverInfo.data.lastName
                    : "-"}
                  <section className="fw-normal">
                    {receiverInfo ? receiverInfo.data.noTelp : "-"}
                  </section>
                </p>
              </div>
            </div>
          </div>
        ) : null}
        <h5 className="my-3">Details</h5>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <p>
            Amount
            <section className="fw-bold mt-2">{`Rp.${nominal}`}</section>
          </p>
        </div>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <p>
            Balance Left
            <section className="fw-bold mt-2">{`Rp.${
              balance - nominal
            }`}</section>
          </p>
        </div>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <p>
            Date & Time
            <section className="fw-bold mt-2">{today}</section>
          </p>
        </div>
        <div className={`mb-3 ${styles.cardDetails}`}>
          <p>
            Notes
            <section className="fw-bold mt-2">{notes}</section>
          </p>
        </div>
        {isMoved ? (
          <div className="row px-2">
            <h5>Transfer To</h5>
            <div className={`d-flex mb-3 gap-4 ${styles.cardTransfer}`}>
              <Image
                width={50}
                height={50}
                src={
                  receiverInfo
                    ? receiverInfo.data.image === null
                      ? (receiverInfo.data.image = "/image/avadef.png")
                      : "/image/avadef.png"
                    : "/image/avadef.png"
                }
                alt="avatarTransfer"
              />
              <div className={`${styles.titleTransfer}`}>
                <p>
                  Samuel Suhi
                  <section>+62 813-8492-9994</section>
                </p>
              </div>
            </div>
          </div>
        ) : null}
        {!status ? (
          <button
            onClick={() => {
              setModal(true);
            }}
            type="button"
            className={`btn btn-primary ${styles.buttonConfirm}`}
          >
            Confirm
          </button>
        ) : (
          <>
            {!isError ? (
              <button className={`btn btn-primary ${styles.buttonConfirm}`}>
                Try Again
              </button>
            ) : (
              <div className={`${styles.buttonError}`}>
                <button
                  className={`btn btn-light me-4 text-primary border border-1`}
                >
                  Download PDF
                </button>
                <button
                  onClick={() => {
                    router.push("/home");
                  }}
                  className={`btn btn-primary`}
                >
                  Back to Home
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <ModalInputV2
        show={modal}
        title="Enter PIN to Transfer"
        desc="Enter your 6 digits PIN for confirmation to continue transferring money."
        button="Continue"
        click={handleTransfer}
        hide={() => {
          setModal(false);
        }}
      >
        <PinInput
          size="lg"
          placeholder="_"
          values={values}
          onChange={(value, idx, values) => {
            setValues(values);
          }}
        />
      </ModalInputV2>
      {/* <ModalInput
        id="exampleModal"
        title="Enter PIN to Transfer"
        desc="Enter your 6 digits PIN for confirmation to continue transferring money."
        button="Continue"
        click={handleTransfer}
      >
        <PinInput
          size="lg"
          placeholder="_"
          values={values}
          onChange={(value, idx, values) => {
            setValues(values);
          }}
        />
      </ModalInput> */}
    </LoggedinLayout>
  );
};

export default TransferConfirm;
