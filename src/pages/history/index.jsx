import CardHistory from "../../components/CardHistory";
import LoggedinLayout from "../../components/LoggedInLayout/index";
import styles from "../../styles/History.module.css";

const Hsitory = () => {
  return (
    <LoggedinLayout title="History">
      <div className={`col-12 col-md-9 ${styles.containerHistory}`}>
        <div className="d-flex align-items-center justify-content-between">
          <h5>Transaction History</h5>
          <div className={`${styles.dropdown}`}>
            <span className="bg-light p-3 rounded-3">---Select Filter---</span>
            <div className={`${styles.dropdownContent}`}>
              <p>Hello World!</p>
            </div>
          </div>
        </div>
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
      </div>
    </LoggedinLayout>
  );
};

export default Hsitory;
