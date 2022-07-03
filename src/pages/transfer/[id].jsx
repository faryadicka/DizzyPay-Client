import LoggedinLayout from "../../components/LoggedInLayout/index";
import styles from "../../styles/Transfer.module.css";
import Image from "next/image";
import Avatar from "../../assets/img/logo.svg";
import Pencil from "../../assets/img/Vector.png";
import { useRouter } from "next/router";
import { getProfileByIdAxios } from "../../modules/auth";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setNominalAction,
  setNotesAction,
  getReceiverAction,
} from "../../redux/actionCreator/auth";

const TransferId = () => {
  const [user, setUser] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.dataLogin.token);
  const balance = useSelector((state) => state.auth.dataInfo.data.balance);
  const { id } = router.query;

  useEffect(() => {
    dispatch(getReceiverAction(id, token));
    getProfileByIdAxios(id, token)
      .then((res) => {
        console.log(res);
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, token, dispatch]);

  return (
    <LoggedinLayout title="Transfer">
      <form className={`col-12 col-md-9 ${styles.containerTransfer}`}>
        <h5>Transfer Money</h5>
        <div className={`d-flex mt-4 gap-4 ${styles.cardTransfer}`}>
          <Image src={Avatar} alt="avatarTransfer" />
          <div className={`${styles.titleTransfer}`}>
            <div className="fw-bold">
              {user.firstName && user.lastName !== undefined
                ? user.firstName + " " + user.lastName
                : ""}
              <section>{user.noTel !== undefined ? user.noTelp : ""}</section>
            </div>
          </div>
        </div>
        <p className={`mt-5 ${styles.descTransfer}`}>
          Type the amount you want to transfer and then <br /> press continue to
          the next steps.
        </p>
        <div className="row justify-content-center mt-5">
          <div className="col-6 col-md-12">
            <input
              type="number"
              className={`${styles.nominal}`}
              placeholder="0.00"
              onChange={(e) => {
                dispatch(setNominalAction(Number(e.target.value)));
              }}
            />
          </div>
          <p className="text-center mt-4 fw-bold">
            {`Rp. ${balance} Available`}
          </p>
        </div>
        <div className="row justifiy-items-center">
          <div className={`col-8 col-md-4 ${styles.notes}`}>
            <Image src={Pencil} alt="avatarTransfer" />
            <input
              type="text"
              // name="notes"
              className={`${styles.notesInput}`}
              placeholder="Add some notes"
              onChange={(e) => {
                dispatch(setNotesAction(e.target.value));
              }}
            />
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            router.push(`/transfer/${id}/confirm`);
          }}
          className={`btn btn-primary ${styles.buttonConfirmTransfer}`}
        >
          Continue
        </button>
      </form>
    </LoggedinLayout>
  );
};

export default TransferId;
