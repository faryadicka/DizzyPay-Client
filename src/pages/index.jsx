import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Landing.module.css";
import Image from "next/image";

//Assets
import Smp from "../../public/image/smp.png";
import Profile from "../../public/image/1.png";

export default function Home() {
  const router = useRouter();
  return (
    <>
    <Head>
      <title>Landing page</title>
    </Head>
      <div className={`${styles.containerHome} text-center`}>
        <div className={`${styles.banner}`}>
          <div className="p-5 row justify-content-between">
            <h3 className="col-md-2 col-10 fw-bold text-white ms-5">
              DizzyPay
            </h3>
            <div className="col-md-3">
              <button
                onClick={() => {
                  router.push("/auth/login");
                }}
                className={`px-4 btn btn-primary border border-white rounded-5`}
              >
                Login
              </button>
              <button
                onClick={() => {
                  router.push("/auth/register");
                }}
                className="btn btn-light ms-2 px-4 rounded-5"
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className={`row text-center text-white justify-content-center`}>
            <h1 className={styles.headerBanner}>
              Awesome App <br />
              For Saving Time.
            </h1>
            <p className="pt-md-4">
              We bring you a mobile app for banking problems that oftenly <br />
              wasting much of your times.
            </p>
            <button className={`${styles.tryBtn} col-1 btn btn-light fw-bold`}>
              Try it Free
            </button>
          </div>
        </div>
        <div className={styles.secondRow}>
          <h1 className={`${styles.secondHeader}`}>
            <section className={styles.sectionHeader}>Why</section> Choose
            DizzyPay?
          </h1>
          <p className="pt-3 fw-400">
            We have some great features from the application and it’s totally{" "}
            <br />
            free to use by all users around the world.
          </p>
          <div className="row justify-content-center mt-5">
            <div className="col-md-3 p-3">
              <Image
                width={30}
                height={30}
                src={"/image/phone.png"}
                alt="callimage"
              />
              <p>24/7 Support</p>
              <p>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>
            <div className="col-md-3 bg-white p-3 rounded">
              <Image
                width={30}
                height={30}
                src={"/image/lock.png"}
                alt="callimage"
              />
              <p>24/7 Support</p>
              <p>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>
            <div className="col-md-3  p-3">
              <Image
                width={30}
                height={30}
                src={"/image/download.png"}
                alt="callimage"
              />
              <p>24/7 Support</p>
              <p>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.thirdRow}`}>
          <div className="col-md-1">
            <Image
              width={120}
              height={85}
              src={"/image/micro.png"}
              alt="micro"
            />
          </div>
          <div className="col-md-1">
            <Image
              width={120}
              height={85}
              src={"/image/drop.png"}
              alt="micro"
            />
          </div>
          <div className="col-md-1">
            <Image width={120} height={85} src={"/image/hm.png"} alt="micro" />
          </div>
          <div className="col-md-1">
            <Image width={120} height={85} src={"/image/air.png"} alt="micro" />
          </div>
          <div className="col-md-1">
            <Image
              width={120}
              height={85}
              src={"/image/canon.png"}
              alt="micro"
            />
          </div>
          <div className="col-md-1">
            <Image
              width={120}
              height={85}
              src={"/image/dell.png"}
              alt="micro"
            />
          </div>
        </div>
        <div className={`${styles.fourthRow}`}>
          <h1 className={styles.price}>Rp. 390.736.500</h1>
          <h1 className={`${styles.thirdHeader} mt-3`}>
            <section className={styles.sectionHeader}>Money</section> has Been
            Transfered.
          </h1>
          <p className="mt-5">
            That amount of money has been transfered from all users. <br />
            We still counting and going strong!
          </p>
        </div>
        <div className={`${styles.fifthRow} d-flex`}>
          <div className="col-5">
            <Image src={Smp} alt="imgSMP" />
          </div>
          <div className="col-7 mt-5">
            <h1 className={`${styles.fourthHeader}`}>
              All The
              <section className={styles.sectionHeader}> Great</section> <br />
              DizzyPay Features.
            </h1>
            <div
              className={`card border border-0 mt-4 text-start p-3 w-75 rounded-4 ${styles.cardRound}`}
            >
              <div className="title-card">
                <p className="fw-bold">
                  <span className="me-2">1.</span> Small Fee
                </p>
                <p>
                  We only charge 5% of every success transaction done in FazzPay
                  app.
                </p>
              </div>
            </div>
            <div
              className={`card border border-0 mt-4 text-start p-3 w-75 rounded-4 ${styles.cardRound}`}
            >
              <div className="title-card">
                <p className="fw-bold">
                  <span className="me-2">2.</span> Data Secured
                </p>
                <p>
                  All your data is secured properly in our system and it’s
                  encrypted.
                </p>
              </div>
            </div>
            <div
              className={`card border border-0 mt-4 text-start p-3 w-75 rounded-4 ${styles.cardRound}`}
            >
              <div className="title-card">
                <p className="fw-bold">
                  <span className="me-2">3.</span> User Friendly
                </p>
                <p>
                  DizzyPay come up with modern and sleek design and not
                  complicated.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.sixthRow}`}>
          <h1 className={`${styles.fifthHeader}`}>
            What Users are
            <section className={styles.sectionHeader}> Saying.</section>
          </h1>
          <p className="mt-5">
            We have some great features from the application and it’s totally{" "}
            <br />
            free to use by all users around the world.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <div className={styles.arrowLeft}>
              <Image
                width={40}
                height={40}
                src={"/image/left.png"}
                alt="left"
              />
            </div>
            <div
              className={`${styles.cardAva} card p-5 border border-0 mx-3 rounded-5`}
            >
              <div className="image-avatar">
                <Image src={Profile} alt="profile" />
              </div>
              <div className="card-title">
                <h2>Alex Hansinburg</h2>
                <p>Designer</p>
                <p className="mt-4">
                  “This is the most outstanding app that I’ve ever try in my
                  live, this app is such an amazing masterpiece and it’s
                  suitable for you who is bussy with their bussiness and must
                  transfer money to another person aut there. Just try this app
                  and see the power!”
                </p>
              </div>
            </div>
            <div className={styles.arrowRight}>
              <Image
                width={40}
                height={40}
                src={"/image/right.png"}
                alt="right"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.seventhRow} text-start text-white`}>
          <h1>DizzyPay</h1>
          <p className="mt-4">
            Simplify financial needs and saving <br /> much time in banking
            needs with <br />
            one single app.
          </p>
          <div className={styles.lineFooter}></div>
          <div className={styles.copyRight}>
            <p>2020 FazzPay. All right reserved.</p>
            <div className="d-flex gap-3">
              <p>+62 5637 8882 9901</p>
              <p>contact@fazzpay.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
