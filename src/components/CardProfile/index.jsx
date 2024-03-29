import styles from "../../styles/Profile.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const CardProfile = ({ title, path }) => {
  const router = useRouter();
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        router.push(`/profile/${path}`);
      }}
      className={`d-flex my-3 justify-content-between align-items-center ${styles.cardProfile}`}
    >
      <div className="col-6 p-2 text-start">{title}</div>
      <div className="col-1 mt-2">
        <Image
          width={25}
          height={25}
          src={"/image/arrow-left.svg"}
          alt="arrowLeft"
        />
      </div>
    </div>
  );
};

export default CardProfile;
