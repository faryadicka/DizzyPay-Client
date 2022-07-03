import Image from "next/image";
import styles from "../../styles/CardTransfer.module.css";
import { useRouter } from "next/router";

const CardTransfer = ({ image, firstname, lastname, noTelp, id }) => {
  let name = firstname + lastname;
  image === null ? (image = "/image/avadef.png") : image;
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/transfer/${id}`);
      }}
      className={`d-flex mt-2 gap-4 ${styles.cardTransfer}`}
    >
      <Image width={60} height={60} src={image} alt="avatarTransfer" />
      <div className={`${styles.titleTransfer}`}>
        <p>
          {name}
          <section>{noTelp}</section>
        </p>
      </div>
    </div>
  );
};

export default CardTransfer;
