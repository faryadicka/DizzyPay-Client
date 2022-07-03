import styles from "../../styles/Modal.module.css";
import { Modal, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getProfileAction } from "../../redux/actionCreator/auth";

const ModalNavV2 = ({ show, hide, message, button, path }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.auth.dataLogin.id);
  const token = useSelector((state) => state.auth.dataLogin.token);
  return (
    <Modal
      show={show}
      hide={hide}
      centered
      className={`border border-0 rounded-4 ${styles.modalConfirm}`}
    >
      <Modal.Body className="border border-0">
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer className="border border-0">
        <Button
          variant="primary"
          onClick={() => {
            router.push(path);
            dispatch(getProfileAction(idUser, token));
          }}
        >
          {button}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNavV2;
