import Avatar from "../../assets/img/logo.svg";
import Image from "next/image";
import styles from "../../styles/CardTransfer.module.css";

const CardTransfer = () => {
  return (
    <div className={`d-flex mt-4 gap-4 ${styles.cardTransfer}`}>
      <Image src={Avatar} alt="avatarTransfer" />
      <div className={`${styles.titleTransfer}`}>
        <p>
          Samuel Suhi
          <section>+62 813-8492-9994</section>
        </p>
      </div>
    </div>
  );
};

export default CardTransfer;
