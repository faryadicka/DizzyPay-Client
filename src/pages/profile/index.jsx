import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import LoggedinLayout from "../../components/LoggedInLayout/index";
import styles from "../../styles/Profile.module.css";
import Image from "next/image";
import CardProfile from "../../components/CardProfile";
import { updateProfileAxios, getProfileByIdAxios } from "../../modules/auth";

const Profile = () => {
  const [image, setImage] = useState("/image/avadef.png");
  const inputFile = useRef();
  const dataInfo = useSelector((state) => state.auth.dataInfo);
  const id = useSelector((state) => state.auth.dataLogin.id);
  const token = useSelector((state) => state.auth.dataLogin.token);
  const data = [
    { id: 1, title: "Personal Information", path: "personalinfo" },
    { id: 2, title: "Change Password", path: "changepass" },
    { id: 3, title: "Change PIN", path: "changepin" },
  ];

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleUpdateImage = (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("image", image);
    updateProfileAxios(id, body, token)
      .then((res) => {
        console.log(res);
        getProfileByIdAxios(res.data.data.id, token)
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
                dataInfo.data !== undefined
                  ? `https://fazzpay.herokuapp.com/uploads/${dataInfo.data.image}`
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
              <p>Edit</p>
            </div>
            <input
              type="file"
              name="file"
              ref={inputFile}
              hidden
              onChange={handleChangeFile}
            />
            <h2>Ferry Aryadicka</h2>
            <p className={styles.contact}>+62 813-9387-7946</p>
            {data.map((item) => (
              <CardProfile title={item.title} key={item.id} path={item.path} />
            ))}
            <div
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
