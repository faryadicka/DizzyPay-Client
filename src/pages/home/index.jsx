import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
//Components
import LoggedinLayout from "../../components/LoggedInLayout/index";
import CardHistory from "../../components/CardHistory/index";
//ReduxAction
import { getProfileAction } from "../../redux/actionCreator/auth";

const Home = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.dataLogin.id);
  const token = useSelector((state) => state.auth.dataLogin.token);
  const dataInfo = useSelector((state) => state.auth.dataInfo);

  useEffect(() => {
    dispatch(getProfileAction(id, token));
  }, [dispatch, id, token]);
  return (
    <LoggedinLayout title="Home">
      <div className="col-12 col-md-9">
        <div
          className={`d-flex justify-content-between text-white ${styles.saldoRow}`}
        >
          <div className="col-5">
            <p>Balance</p>
            <h1>{`Rp.${dataInfo ? dataInfo.data.balance : "0"}`}</h1>
            <p className="mt-4">{dataInfo ? dataInfo.data.noTelp : "-"}</p>
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
                <Image
                  src={"/image/arrow-green.svg"}
                  width={30}
                  height={30}
                  alt="arrow-gren"
                />
                <p>Income</p>
                <p>Rp2.120.000</p>
              </div>
              <div className={`col-md-4 col-4 ps-4 ${styles.dashboardCard}`}>
                <Image
                  src={"/image/arrow-red.svg"}
                  width={30}
                  height={30}
                  alt="arrow-gren"
                />
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
