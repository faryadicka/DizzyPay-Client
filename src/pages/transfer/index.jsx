import LoggedinLayout from "../../components/LoggedInLayout/index";
import styles from "../../styles/Transfer.module.css";
import Image from "next/image";
import CardTransfer from "../../components/CardTransfer";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReceiverAxios } from "../../modules/auth";
import { useRouter } from "next/router";

const Transfer = () => {
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();
  const token = useSelector((state) => state.auth.dataLogin.token);

  useEffect(() => {
    getReceiverAxios("", "", "", token)
      .then((res) => {
        setUser(res.data.data);
        setSuccessMsg(res.data.msg);
      })
      .catch((err) => {
        setErrMsg(err.response.data.msg);
      });
  }, [token]);

  const handleSearchReceiver = (e) => {
    e.preventDefault();
    router.push(`/transfer?search=${input}`);
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
        <h5>Search Recevier</h5>
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
