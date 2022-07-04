import CardHistory from "../../components/CardHistory";
import LoggedinLayout from "../../components/LoggedInLayout/index";
import styles from "../../styles/History.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllhistories } from "../../modules/history";
import { useRouter } from "next/router";

const { NEXT_PUBLIC_CLOUDINARY } = process.env;

const Hsitory = () => {
  const [history, setHistory] = useState([]);
  const [pagination, setPagination] = useState({});
  const [dropdown, showDropdown] = useState(false);
  const token = useSelector((state) => state.auth.dataLogin?.token);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const { filter = "", page = "1" } = query;
    getAllhistories(filter, page, token)
      .then((res) => {
        console.log(res);
        setHistory(res.data?.data);
        setPagination(res.data?.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, query]);
  const { page, totalPage } = pagination;
  let active = Number(page);
  let pageItem = [];
  for (let item = 1; item <= totalPage; item++) {
    pageItem.push(item);
  }
  console.log(router);
  return (
    <LoggedinLayout title="History">
      <div className={`col-12 col-md-9 ${styles.containerHistory}`}>
        <div
          className={`${styles.headerHistory} d-flex align-items-center justify-content-between`}
        >
          <h5>Transaction History</h5>
          <div
            onClick={() => {
              showDropdown(!dropdown);
            }}
            className={`position-relative ${styles.filterButton}`}
          >
            <p className="bg-light p-2 rounded rounded-5 ">
              --- Select Filter ---
            </p>
            {dropdown ? (
              <div className={styles.dropDownV2}>
                <p
                  onClick={() => {
                    router.push("history?filter=WEEK&page=1");
                  }}
                >
                  WEEK
                </p>
                <p
                  onClick={() => {
                    router.push("history?filter=MONTH&page=1");
                  }}
                >
                  MONTH
                </p>
                <p
                  onClick={() => {
                    router.push("history?filter=YEAR&page=1");
                  }}
                >
                  YEAR
                </p>
                <p
                  onClick={() => {
                    router.push("history?page=1");
                  }}
                >
                  ALL
                </p>
              </div>
            ) : null}
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
        <div className="text-center">
          {pageItem.map((item) => (
            <button
              onClick={() => {
                if (router.asPath.includes("filter")) {
                  return router.push(
                    `history?filter=${router.query.filter}&page=${item}`
                  );
                }
                return router.push(`history?page=${item}`);
              }}
              key={item}
              className={styles.pagination}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </LoggedinLayout>
  );
};

export default Hsitory;
