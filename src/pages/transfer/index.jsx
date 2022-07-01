import LoggedinLayout from "../../components/LoggedInLayout/index";
import styles from "../../styles/Transfer.module.css";
import Search from "../../assets/img/search.svg";
import Image from "next/image";
import CardTransfer from "../../components/CardTransfer";

const Transfer = () => {
  return (
    <LoggedinLayout title="Transfer">
      <div className={`col-12 col-md-9 ${styles.containerTransfer}`}>
        <h5>Search Recevier</h5>
        <div className={styles.inputRecevier}>
          <div className={styles.imgSearch}>
            <Image src={Search} alt="search" />
          </div>
          <input
            type="text"
            name="recevier"
            className={styles.inputSearch}
            placeholder="Search receiver here"
          />
        </div>
        <CardTransfer />
        <CardTransfer />
        <CardTransfer />
        <CardTransfer />
      </div>
    </LoggedinLayout>
  );
};

export default Transfer;
