import styles from "../../styles/Modal.module.css";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
// import { getProfileAction } from "../../redux/actionCreator/auth";
import { getProfileByIdAxios } from "../../modules/auth";

const ModalNav = ({ id, message, button, path }) => {
  const router = useRouter();
  const idUser = useSelector((state) => state.auth.dataLogin.id);
  const token = useSelector((state) => state.auth.dataLogin.token);
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
            <div className="modal-body border border-0">
              <p>{message}</p>
            </div>
            <div className="modal-footer  border border-0">
              <button
                data-bs-toggle="modal"
                data-bs-target="#statusModal"
                // type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  getProfileByIdAxios(idUser, token)
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                  setTimeout(() => {
                    router.push(path);
                  }, 1000);
                }}
              >
                {button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNav;
