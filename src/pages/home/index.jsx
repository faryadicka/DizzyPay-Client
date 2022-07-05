import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { Bar } from "react-chartjs-2";
import {
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  Chart,
} from "chart.js";

//Components
import LoggedinLayout from "../../components/LoggedInLayout/index";
import CardHistory from "../../components/CardHistory/index";
import ModalInputV2 from "../../components/ModalInputV2/index";

//RequestAxios
import { getDataDashboard, getHistoriesLimit } from "../../modules/history";
import currencyPeriod from "../../modules/helpers/currencyPeriod.js"

//ReduxAction
import { getProfileAction, topUpAction } from "../../redux/actionCreator/auth";

const Home = () => {
  const [history, setHistory] = useState([]);
  const [chartData, setChartData] = useState({});
  const [modal, setModal] = useState(false);
  const [topUp, setTopUp] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(false);
  const id = useSelector((state) => state.auth.dataLogin?.id);
  const token = useSelector((state) => state.auth.dataLogin?.token);
  const dataInfo = useSelector((state) => state.auth.dataInfo);
  const redirectUrl = useSelector((state) => state.auth.dataTopUp);
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  );

  const incomeData = {
    label: "Income",
    data: chartData.listIncome
      ? [
          chartData.listIncome[5].total,
          chartData.listIncome[6].total,
          chartData.listIncome[0].total,
          chartData.listIncome[1].total,
          chartData.listIncome[2].total,
          chartData.listIncome[3].total,
          chartData.listIncome[4].total,
        ]
      : [],
    backgroundColor: "#6379F4",
  };

  const expenseData = {
    label: "Expense",
    data: chartData.listIncome
      ? [
          chartData.listExpense[5].total,
          chartData.listExpense[6].total,
          chartData.listExpense[0].total,
          chartData.listExpense[1].total,
          chartData.listExpense[2].total,
          chartData.listExpense[3].total,
          chartData.listExpense[4].total,
        ]
      : [],
    backgroundColor: "#9DA6B5",
  };

  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [incomeData, expenseData],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    legend: {
      label: {
        fontSize: 14,
        fontFamily: "Nunito Sans",
      },
    },
  };

  useEffect(() => {
    getHistoriesLimit(token)
      .then((res) => {
        console.log(res);
        setHistory(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  useEffect(() => {
    dispatch(getProfileAction(id, token));
  }, [dispatch, id, token]);

  useEffect(() => {
    getDataDashboard(token, id)
      .then((res) => {
        console.log(res);
        setChartData(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, token]);

  const handleTopUp = (e) => {
    e.preventDefault();
    const body = {
      amount: topUp,
    };
    dispatch(topUpAction(body, token))
      .then((res) => {
        console.log(res);
        setIsSuccess(true);
        dispatch(getProfileAction(id, token))
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
            <h1>{`Rp.${dataInfo ? currencyPeriod(dataInfo.data.balance) : "0"}`}</h1>
            <p className="mt-4">{dataInfo ? dataInfo.data.noTelp : "-"}</p>
          </div>
          <div className="col-3 row gap-3">
            <button
              onClick={() => {
                router.push("/transfer?page=1");
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
          <div className={`col-5 p-5 ${styles.colDashboard}`}>
            <div className="row justify-content-between">
              <div
                className={`col-md-6 col-4 text-center ${styles.dashboardCard}`}
              >
                <Image
                  src={"/image/arrow-green.svg"}
                  width={30}
                  height={30}
                  alt="arrow-gren"
                />
                <p>Income</p>
                <p>{`Rp. ${chartData.totalIncome}`}</p>
              </div>
              <div
                className={`col-md-6 col-4 ps-4 text-center ${styles.dashboardCard}`}
              >
                <Image
                  src={"/image/arrow-red.svg"}
                  width={30}
                  height={30}
                  alt="arrow-gren"
                />
                <p>Expense</p>
                <p>{`Rp. ${chartData.totalExpense}`}</p>
              </div>
              <Bar data={data} options={chartOptions} />
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
                <p
                  onClick={() => {
                    router.push("/history?page=1");
                  }}
                  className={`${styles.clickAble}`}
                >
                  See all
                </p>
              </div>
            </div>
            {history.map((data) => (
              <CardHistory
                image={data.image}
                firstName={data.firstName}
                lastName={data.lastName}
                type={data.type}
                amount={data.amount}
                key={data.id}
              />
            ))}
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
            <a
              className="text-white text-decoration-none"
              href={redirectUrl.data.redirectUrl}
              target="_blank"
              rel="noreferrer"
            >
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setModal(false);
                }}
                className={`${styles.buttonURL} btn btn-primary`}
              >
              Pay Topup
              </button>
            </a>
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
