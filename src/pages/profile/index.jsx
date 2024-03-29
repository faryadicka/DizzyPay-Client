import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoggedinLayout from "../../components/LoggedInLayout/index";
import styles from "../../styles/Profile.module.css";
import Image from "next/image";
import CardProfile from "../../components/CardProfile";
import { updateProfileAxios, getProfileByIdAxios } from "../../modules/auth";
import { getProfileAction } from "../../redux/actionCreator/auth";
import { useRouter } from "next/router";
import { logoutAction } from "../../redux/actionCreator/auth";
import { logoutAxios } from "../../modules/auth";
const { NEXT_PUBLIC_CLOUDINARY } = process.env;

const Profile = () => {
  const [image, setImage] = useState("/image/avadef.png");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isError, setIsError] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const inputFile = useRef();
  const router = useRouter();
  const dispatch = useDispatch();
  const dataInfo = useSelector((state) => state.auth.dataInfo);
  const id = useSelector((state) => state.auth.dataLogin?.id);
  const token = useSelector((state) => state.auth.dataLogin?.token);
  const data = [
    { id: 1, title: "Personal Information", path: "personalinfo" },
    { id: 2, title: "Change Password", path: "changepass" },
    { id: 3, title: "Change PIN", path: "changepin" },
  ];

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setShowMsg(false);
  };
  const handleUpdateImage = (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("image", image);
    updateProfileAxios(id, body, token)
      .then((res) => {
        console.log(res);
        setSuccessMsg(res.data?.msg);
        setIsError(false);
        setShowMsg(true);
        dispatch(getProfileAction(res.data?.data.id, token))
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        router.push("/profile");
      })
      .catch((err) => {
        console.log(err);
        setShowMsg(true);
        setIsError(true);
        setErrMsg(err.response?.data.msg);
      });
  };
  return (
    <LoggedinLayout title="Profile">
      <div className={`col-12 col-md-9 ${styles.containerProfile}`}>
        <div className="d-flex justify-content-center">
          <div className="col-6 text-center">
            <Image
              onClick={(e) => {
                inputFile.current.click();
                e.preventDefault();
              }}
              src={
                dataInfo?.data.image
                  ? `${NEXT_PUBLIC_CLOUDINARY}${dataInfo?.data.image}`
                  : "/image/avadef.png"
              }
              alt="profileimage"
              width="75%"
              height="75%"
              className={styles.ImageClick}
            />
            <div
              onClick={handleUpdateImage}
              className={`${styles.inputFile} gap-2 d-flex justify-content-center align-items-center`}
            >
              <Image
                src={"/image/Vector.png"}
                alt="edit"
                width="15px"
                height="15px"
              />
              <p>EDIT</p>
            </div>
            {showMsg ? (
              <>
                {isError ? (
                  <p className="text-danger fw-bold">{`${errMsg}!`}</p>
                ) : (
                  <p className="text-success fw-bold">{`${successMsg}!`}</p>
                )}
              </>
            ) : null}
            <input
              type="file"
              name="file"
              ref={inputFile}
              hidden
              onChange={handleChangeFile}
            />
            <h2>{dataInfo.data?.firstName + " " + dataInfo.data?.lastName}</h2>
            <button onClick={() => {
              router.push("/profile/editname")
            }} className="btn btn-primary my-2">
              EDIT NAME
            </button>
            <p className={styles.contact}>{dataInfo.data?.noTelp}</p>
            {data.map((item) => (
              <CardProfile title={item.title} key={item.id} path={item.path} />
            ))}
            <div
              onClick={() => {
                dispatch(logoutAction(null));
                logoutAxios()
                  .then((res) => {
                    console.log(res);
                    setLogoutMsg(res.data?.msg);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                router.push("/");
              }}
              className={`d-flex justify-content-between align-items-center ${styles.cardProfile}`}
            >
              <div className=" text-start col-5 p-2">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </LoggedinLayout>
  );
};

export default Profile;
