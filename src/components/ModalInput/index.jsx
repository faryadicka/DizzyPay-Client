import styles from "../../styles/ModalInput.module.css";
// import ModalStatus from "../ModalStatus";

const ModalInput = ({ id, title, desc, children, button }) => {
  return (
    <>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`${styles.modalConfirm} modal-content`}>
            <div className="modal-header border border-0">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body border border-0">
              <p>{desc}</p>
              <div className={`${styles.pinCode}`}>{children}</div>
            </div>
            <div className="modal-footer  border border-0">
              <button
                data-bs-toggle="modal"
                data-bs-target="#statusModal"
                type="button"
                className="btn btn-primary"
              >
                {button}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <ModalStatus id="statusModal" /> */}
    </>
  );
};

export default ModalInput;
