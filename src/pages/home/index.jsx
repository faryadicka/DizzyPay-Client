import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

//Components
import LoggedinLayout from "../../components/LoggedInLayout/index";
import CardHistory from "../../components/CardHistory/index";
import ModalInputV2 from "../../components/ModalInputV2/index";

//ReduxAction
import { getProfileAction } from "../../redux/actionCreator/auth";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [topUp, setTopUp] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const id = useSelector((state) => state.auth.dataLogin.id);
  const token = useSelector((state) => state.auth.dataLogin.token);
  const dataInfo = useSelector((state) => state.auth.dataInfo);
  const redirectUrl = useSelector((state) => state.auth.dataTopUp);

  useEffect(() => {
    dispatch(getProfileAction(id, token));
  }, [dispatch, id, token]);

  const handleTopUp = (e) => {
    e.preventDefault();
    const body = {
      amount: topUp,
    };
    dispatch(topUpAction(body, token))
      .then((res) => {
        console.log(res);
        setIsSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
      });
  };
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
            <button
              onClick={() => {
                router.push("/transfer");
              }}
              className={`btn ${styles.btnSaldo}`}
            >
              Transfer
            </button>
            <button
              onClick={() => {
                setModal(true);
              }}
              className={`btn ${styles.btnSaldo}`}
            >
              Top Up
            </button>
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
      <ModalInputV2
        show={modal}
        title="Top Up"
        desc="Enter the amount of money, and click submit"
        button="Submit"
        handle={handleTopUp}
        status={isSuccess}
        hide={() => {
          setModal(false);
        }}
      >
        {isSuccess ? (
          <>
            <button
              onClick={() => {
                setIsSuccess(false);
              }}
              className={`${styles.buttonURL} btn btn-primary`}
            >
              <a
                className="text-white text-decoration-none"
                href={redirectUrl.data.redirectUrl}
                target="_blank"
                rel="noreferrer"
              >
                Go to Link
              </a>
            </button>
          </>
        ) : (
          <input
            type="number"
            name="topup"
            className={styles.inputTopup}
            value={topUp}
            onChange={(e) => {
              setTopUp(e.target.value);
            }}
          />
        )}
      </ModalInputV2>
    </LoggedinLayout>
  );
};

export default Home;
