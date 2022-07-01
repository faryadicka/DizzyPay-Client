import styles from "../../styles/ModalStatus.module.css";
import Image from "next/image";
import Success from "../../assets/img/success.svg";
import { useRouter } from "next/router";

const ModalStatus = ({ id }) => {
  const router = useRouter();
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className={`${styles.modalStatus} modal-content`}>
          <div className="modal-header border border-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body border border-0">
            <Image src={Success} alt="status" />
            <p>Transfer Success</p>
            <p>
              We can’t transfer your money at the moment, we recommend you to
              check your internet connection and try again.
            </p>
          </div>
          <div className="modal-footer  border border-0">
            <button type="button" className="btn btn-primary">
              Download ZIP
            </button>
            <button
              onClick={() => {
                router.push("/home");
              }}
              type="button"
              className="btn btn-primary"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalStatus;
