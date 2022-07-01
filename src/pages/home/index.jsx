import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Ava from "../../assets/img/avanav.png";
import LoggedinLayout from "../../components/LoggedInLayout/index";

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
        <div className="row"></div>
      </div>
    </LoggedinLayout>
  );
};

export default Home;
