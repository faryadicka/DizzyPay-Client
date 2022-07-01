import Image from "next/image";
import styles from "../../styles/Home.module.css";
import ArrowGreen from "../../assets/img/arrow-green.svg";
import ArrowRed from "../../assets/img/arrow-Red.svg";
import Avatar from "../../assets/img/logo.svg";
//Components
import LoggedinLayout from "../../components/LoggedInLayout/index";
import CardHistory from "../../components/CardHistory/index";

const Home = () => {
  return (
    <LoggedinLayout title="Home">
      <div className="col-12 col-md-9">
        <div
          className={`d-flex justify-content-between text-white ${styles.saldoRow}`}
        >
          <div className="col-3">
            <p>Balance</p>
            <h1>Rp120.000</h1>
            <p className="mt-4">+62 813-9387-7946</p>
          </div>
          <div className="col-3 row gap-3">
            <button className={`btn ${styles.btnSaldo}`}>Transfer</button>
            <button className={`btn ${styles.btnSaldo}`}>Top Up</button>
          </div>
        </div>
        <div
          className={`d-flex justify-content-between gap-3 mt-4 ${styles.rowInfo}`}
        >
          <div className={`col-5 ${styles.colDashboard}`}>
            <div className="row justify-content-between">
              <div className={`col-md-4 col-4 ${styles.dashboardCard}`}>
                <Image src={ArrowGreen} alt="arrow-gren" />
                <p>Income</p>
                <p>Rp2.120.000</p>
              </div>
              <div className={`col-md-4 col-4 ps-4 ${styles.dashboardCard}`}>
                <Image src={ArrowRed} alt="arrow-gren" />
                <p>Expense</p>
                <p>Rp1.560.000</p>
              </div>
            </div>
          </div>
          <div className={`col-4 ${styles.colHistory}`}>
            <div className="row justify-content-between">
              <div className="col-md-7 col-9">
                <p className={`fw-bold ${styles.clickAble}`}>
                  Transaction History
                </p>
              </div>
              <div className="col-md-3 col-3">
                <p className={`${styles.clickAble}`}>See all</p>
              </div>
            </div>
            <CardHistory />
            <CardHistory />
            <CardHistory />
            <CardHistory />
          </div>
        </div>
      </div>
    </LoggedinLayout>
  );
};

export default Home;
