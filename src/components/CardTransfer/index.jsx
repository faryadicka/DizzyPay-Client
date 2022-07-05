import Image from "next/image";
import styles from "../../styles/CardTransfer.module.css";
import { useRouter } from "next/router";
const { NEXT_PUBLIC_CLOUDINARY } = process.env;

const CardTransfer = ({ image, firstname, lastname, noTelp, id }) => {
  let name = firstname + " " + lastname;
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
        src={!image ? "/image/avadef.png" : `${NEXT_PUBLIC_CLOUDINARY}${image}`}
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
