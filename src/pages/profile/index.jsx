import { useRef } from "react";
import LoggedinLayout from "../../components/LoggedInLayout/index";
import Avaprofile from "../../assets/img/avanav.png";
import Pencil from "../../assets/img/Vector.png";
import styles from "../../styles/Profile.module.css";
import Image from "next/image";
import CardProfile from "../../components/CardProfile";

const Profile = () => {
  const inputFile = useRef();
  const data = [
    { id: 1, title: "Personal Information", path: "personalinfo" },
    { id: 2, title: "Change Password", path: "changepass" },
    { id: 3, title: "Change PIN", path: "changepin" },
  ];
  return (
    <LoggedinLayout title="Profile">
      <div className={`col-12 col-md-9 ${styles.containerProfile}`}>
        <div className="d-flex justify-content-center">
          <div className="col-6 text-center">
            <Image
              src={Avaprofile}
              alt="profileimage"
              width="75%"
              height="75%"
            />
            <div
              onClick={(e) => {
                inputFile.current.click();
                e.preventDefault();
              }}
              className={`${styles.inputFile} gap-2 d-flex justify-content-center align-items-center`}
            >
              <Image src={Pencil} alt="edit" width="15px" height="15px" />
              <p>Edit</p>
            </div>
            <input type="file" name="file" ref={inputFile} hidden />
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
