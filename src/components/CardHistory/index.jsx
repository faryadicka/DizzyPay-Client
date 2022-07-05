import Image from "next/image";
import styles from "../../styles/CardHistory.module.css";
const { NEXT_PUBLIC_CLOUDINARY } = process.env;

const CardHistory = ({ image, firstName, lastName, type, amount }) => {
  const typeName =
    type === "send"
      ? "Transfer"
      : type === "topup"
      ? "Topup"
      : type === "accept"
      ? "Accept"
      : "";
  return (
    <div
      className={`row justify-content-between align-items-center ${styles.clickAble}`}
    >
      <div className="col-7">
        <div className="d-flex align-items-center justify-content-start gap-3">
          <Image
            width={60}
            height={60}
            src={
              image ? `${NEXT_PUBLIC_CLOUDINARY}${image}` : "/image/avadef.png"
            }
            alt="avatarHistory"
          />
          <div className={`${styles.titleHistory}`}>
            <div className="fw-bold">
              {firstName + " " + lastName}
              <section className="fw-normal">{typeName}</section>
            </div>
          </div>
        </div>
      </div>
      <div className="col-5 text-end">
        <p
          className={
            type === "topup" || type === "send"
              ? styles.redColor
              : styles.greenColor
          }
        >{`${type === "send" ? "-" : "+"}Rp.${amount}`}</p>
      </div>
    </div>
  );
};

export default CardHistory;
