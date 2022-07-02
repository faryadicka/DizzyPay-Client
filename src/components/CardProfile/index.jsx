import styles from "../../styles/Profile.module.css";
import Image from "next/image";
import ArrowLeft from "../../assets/img/arrow-left.svg";
import { useRouter } from "next/router";

const CardProfile = ({ title, path }) => {
  const router = useRouter();
  return (
    <div
      className={`d-flex my-3 justify-content-between align-items-center ${styles.cardProfile}`}
    >
      <div
        onClick={(e) => {
          e.preventDefault();
          router.push(`/profile/${path}`);
        }}
        className="col-6 p-2 text-start"
      >
        {title}
      </div>
      <div className="col-1 mt-2">
        <Image src={ArrowLeft} alt="arrowLeft" />
      </div>
    </div>
  );
};

export default CardProfile;
