import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export const TheHeader = () => {
  return (
    <header className={styles.header}>
      <Link href="https://omfil.ru" style={{ zIndex: "2" }}>
        <Image
          src={"/logo.svg"}
          alt={"Омская Филармония"}
          width={250}
          height={150}
        />
      </Link>
      <Link href="/" style={{ zIndex: "2" }}>
        <Image
          src={"/instruction.svg"}
          alt={"Инструкция пользователя"}
          width={75}
          height={75}
        />
      </Link>
    </header>
  );
};
