import Image from "next/image";
import styles from "./home.module.css";
import localFont from "next/font/local"

const PTSerif = localFont({ src: "../../fonts/PTSerif-Bold.ttf" })
const geometria = localFont({ src: "../../fonts/Geometria-Bold.woff" })

export const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <Image
          src={"/logo.svg"}
          alt={"Омская Филармония"}
          width={250}
          height={150}
          priority
        />

        <Image
          src={"/instruction.svg"}
          alt={"Инструкция пользователя"}
          width={75}
          height={75}
          priority
        />
      </div>
      <div className={styles.info}>
        <h1 style={PTSerif.style}>
          Знакомство <br /> <span>c оркестром</span>
        </h1>
        <p style={geometria.style}>Нажмите на экран, чтобы начать</p>
        <Image
          className={styles.pointer}
          src={"/pointer.svg"}
          alt={"Указатель"}
          width={85}
          height={155}
        />
      </div>
    </>
  );
};
