import styles from './main.module.css'
import Image from 'next/image';
import localFont from "next/font/local";

const PTSerif = localFont({ src: "../../../fonts/PTSerif-Bold.ttf" })
const geometria = localFont({ src: "../../../fonts/Geometria-Bold.woff" })

export const TheMain = () => {
	return (
    <main className={styles.main}>
      <h1 style={PTSerif.style}>
        Знакомство <br/><span>c оркестром</span>
      </h1>
      <p style={geometria.style}>Нажмите на экран, чтобы начать</p>
      <Image
        className={styles.pointer}
        src={"/pointer.svg"}
        alt={"Указатель"}
        width={85}
        height={155}
      />
    </main>
  );
}
