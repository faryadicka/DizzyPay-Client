import Image from "next/image";
import Arrowup from "../../../public/image/arrow-red.svg";
import Arrowdown from "../../../public/image/arrow-green.svg";
import styles from "../../styles/Loggedin.module.css";

const CardNotif = ({ firstName, lastName, type, amount }) => {
  const typeName =
    type === "send"
      ? "Transfer"
      : type === "topup"
      ? "Topup"
      : type === "accept"
      ? "Accept"
      : "";
  return (
    <div className={`d-flex ${styles.cardNotif}`}>
      <div className="col-2">
        <Image src={type === "send" ? Arrowup : Arrowdown} alt="arrow" />
      </div>
      <div className="col-10">
        <p className={styles.titleNotif}>{`${typeName} from ${
          firstName + " " + lastName
        }`}</p>
        <p className="fw-bold">{`Rp. ${amount}`}</p>
      </div>
    </div>
  );
};

export default CardNotif;
