import { PinInput } from "react-input-pin-code";
import { useState } from "react";

import LoggedinLayout from "../../../components/LoggedInLayout/index";
import styles from "../../../styles/Transfer.module.css";
import Image from "next/image";
import Avatar from "../../../assets/img/logo.svg";
import Success from "../../../assets/img/success.svg";
import Failed from "../../../assets/img/failed.svg";
import ModalInput from "../../../components/ModalInput";

const TransferConfirm = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const [isMoved, setIsMoved] = useState(false);
  const [status, setStatus] = useState(false);
  const [isError, setError] = useState(false);
  return (
    <LoggedinLayout title="Transfer">
      <div className={`col-12 col-md-9 ${styles.containerTransfer}`}>
        <div className="row justify-content-center py-3">
          {status ? (
            <>
              {!isError ? (
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
              <Image src={Avatar} alt="avatarTransfer" />
              <div className={`${styles.titleTransfer}`}>
                <p>
                  Samuel Suhi
                  <section>+62 813-8492-9994</section>
                </p>
              </div>
            </div>
          </div>
        ) : null}
        <h5 className="my-3">Details</h5>
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
        {isMoved ? (
          <div className="row px-2">
            <h5>Transfer To</h5>
            <div className={`d-flex mb-3 gap-4 ${styles.cardTransfer}`}>
              <Image src={Avatar} alt="avatarTransfer" />
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
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            type="button"
            className={`btn btn-primary ${styles.buttonConfirm}`}
          >
            Confirm
          </button>
        ) : (
          <>
            {isError ? (
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
                <button className={`btn btn-primary`}>Back to Home</button>
              </div>
            )}
          </>
        )}
      </div>
      <ModalInput
        id="exampleModal"
        title="Enter PIN to Transfer"
        desc="Enter your 6 digits PIN for confirmation to continue transferring money."
        button="Continue"
      >
        <PinInput
          size="lg"
          placeholder="_"
          values={values}
          onChange={(value, idx, values) => {
            setValues(values);
          }}
        />
      </ModalInput>
    </LoggedinLayout>
  );
};

export default TransferConfirm;
