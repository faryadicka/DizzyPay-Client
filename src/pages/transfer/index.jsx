import LoggedinLayout from "../../components/LoggedInLayout/index";
import styles from "../../styles/Transfer.module.css";
import Image from "next/image";
import CardTransfer from "../../components/CardTransfer";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReceiverAxios } from "../../modules/auth";
import { useRouter } from "next/router";

const Transfer = () => {
  const [dropdown, showDropdown] = useState(false);
  const [search, setSearch] = useState([]);
  const [pagination, setPagination] = useState({});
  const [input, setInput] = useState("");
  const [user, setUser] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();
  const { query } = router;
  const token = useSelector((state) => state.auth.dataLogin?.token);

  useEffect(() => {
    const { page = "1", search = "", sort = "" } = query;
    getReceiverAxios(search, sort, page, token)
      .then((res) => {
        setUser(res.data.data);
        setSuccessMsg(res.data.msg);
      })
      .catch((err) => {
        setErrMsg(err.response.data.msg);
      });
  }, [token, query]);

  const handleSearchReceiver = (e) => {
    e.preventDefault();
    router.push(`/transfer?search=${input}&page=${query.page}`);
    getReceiverAxios(input, "", "", token)
      .then((res) => {
        console.log(res);
        setSearch(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(input);
  return (
    <LoggedinLayout title="Transfer">
      <div className={`col-12 col-md-9 ${styles.containerTransfer}`}>
        <div className="d-flex justify-content-between">
        <h5>Search Recevier</h5>
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
        <form className={styles.inputRecevier} onSubmit={handleSearchReceiver}>
          <div className={styles.imgSearch}>
            <Image
              width={25}
              height={25}
              src={"/image/search.svg"}
              alt="search"
            />
          </div>
          <input
            type="text"
            name="recevier"
            className={styles.inputSearch}
            placeholder="Search receiver here"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </form>
        {router.query.search
          ? search.map((data) => (
              <CardTransfer
                lastname={data.lastName}
                firstname={data.firstName}
                key={data.id}
                noTelp={data.noTelp}
                image={data.image}
                id={data.id}
              />
            ))
          : user.map((data) => (
              <CardTransfer
                lastname={data.lastName}
                firstname={data.firstName}
                key={data.id}
                noTelp={data.noTelp}
                image={data.image}
                id={data.id}
              />
            ))}
      </div>
    </LoggedinLayout>
  );
};

export default Transfer;
