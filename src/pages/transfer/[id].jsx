import LoggedinLayout from "../../components/LoggedInLayout/index";
import styles from "../../styles/Transfer.module.css";
import Image from "next/image";
import Avatar from "../../assets/img/logo.svg";
import Pencil from "../../assets/img/Vector.png";

const TransferId = () => {
  return (
    <LoggedinLayout title="Transfer">
      <div className={`col-12 col-md-9 ${styles.containerTransfer}`}>
        <h5>Transfer Money</h5>
        <div className={`d-flex mt-4 gap-4 ${styles.cardTransfer}`}>
          <Image src={Avatar} alt="avatarTransfer" />
          <div className={`${styles.titleTransfer}`}>
            <p>
              Samuel Suhi
              <section>+62 813-8492-9994</section>
            </p>
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
            />
          </div>
          <p className="text-center mt-4 fw-bold">
            Rp.120.000 <span>Available</span>
          </p>
        </div>
        <div className="row justifiy-items-center">
          <div className={`col-8 col-md-4 ${styles.notes}`}>
            <Image src={Pencil} alt="avatarTransfer" />
            <input
              type="text"
              name="notes"
              className={`${styles.notesInput}`}
              placeholder="Add some notes"
            />
          </div>
        </div>
      </div>
    </LoggedinLayout>
  );
};

export default TransferId;
