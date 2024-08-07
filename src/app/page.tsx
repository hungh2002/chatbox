import Image from "next/image";
import styles from "../scss/page.module.scss";
import Chat from "@/components/chat";

export default function Home() {
  return (
    <main className={styles.main}>
      <Chat />
    </main>
  );
}
