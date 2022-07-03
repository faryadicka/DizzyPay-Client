import Image from "next/image";
import Arrowup from "../../../public/image/arrow-red.svg";
import styles from "../../styles/Loggedin.module.css";

const CardNotif = () => {
  return (
    <div className={`d-flex ${styles.cardNotif}`}>
      <div className="col-2">
        <Image src={Arrowup} alt="arrow" />
      </div>
      <div className="col-5">
        <p>Desc</p>
        <p>Nominal</p>
      </div>
    </div>
  );
};

export default CardNotif;
