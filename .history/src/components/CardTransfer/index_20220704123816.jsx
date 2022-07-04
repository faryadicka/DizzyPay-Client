import Image from "next/image";
import styles from "../../styles/CardTransfer.module.css";
import { useRouter } from "next/router";

const CardTransfer = ({ image, firstname, lastname, noTelp, id }) => {
  let name = firstname + " " + lastname;
  console.log(image);
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/transfer/${id}`);
      }}
      className={`d-flex mt-2 gap-4 ${styles.cardTransfer}`}
    >
      <Image
        width={60}
        height={60}
        src={
          !image
            ? "/image/avadef.png"
            : `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${image}`
        }
        alt="avatarTransfer"
      />
      <div className={`${styles.titleTransfer}`}>
        <div className="fw-bold">
          {name}
          <section className="fw-normal">{noTelp}</section>
        </div>
      </div>
    </div>
  );
};

export default CardTransfer;
