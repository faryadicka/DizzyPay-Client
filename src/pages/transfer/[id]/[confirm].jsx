import { PinInput } from "react-input-pin-code";
import { useState } from "react";

import LoggedinLayout from "../../../components/LoggedInLayout/index";
import styles from "../../../styles/Transfer.module.css";
import Image from "next/image";
import Avatar from "../../../assets/img/logo.svg";
import ModalInput from "../../../components/ModalInput";

const TransferConfirm = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  return (
    <LoggedinLayout title="Transfer">
      <div className={`col-12 col-md-9 ${styles.containerTransfer}`}>
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
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          type="button"
          className={`btn btn-primary ${styles.buttonConfirm}`}
        >
          Confirm
        </button>
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
