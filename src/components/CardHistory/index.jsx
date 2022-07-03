import Image from "next/image";
import styles from "../../styles/CardHistory.module.css";

const CardHistory = () => {
  return (
    <div
      className={`row justify-content-between align-items-center ${styles.clickAble}`}
    >
      <div className="col-8">
        <div className="d-flex align-items-center justify-content-start gap-3">
          <Image
            width={60}
            height={60}
            src={`/image/avadef.png`}
            alt="avatarHistory"
          />
          <div className={`${styles.titleHistory}`}>
            <p>
              Samuel Suhi
              <section>Accept</section>
            </p>
          </div>
        </div>
      </div>
      <div className="col-4 text-end">
        <p>+Rp50.000</p>
      </div>
    </div>
  );
};

export default CardHistory;
