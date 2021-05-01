import { Github, Instagram } from "@geist-ui/react-icons";
import Discord from "../components/Discord";
import Steam from "../components/Steam";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "../styles/home.module.sass";
import Head from "next/head";

export default function Home() {
  const [visibleNot, setVisibleNot] = useState(false);

  function copyDiscord() {
    copy("albert#8838");
    setVisibleNot(true);
    setTimeout(() => setVisibleNot(false), 5000);
  }

  return (
    <>
      <Head>
        <title>albert</title>
      </Head>
      <div className={styles.intro}>
        <div className={styles.middle}>
          <h1 className={styles.name}>albert</h1>
          <p>
            <a
              href="https://github.com/skidoodle"
              className={styles.social}
              target="_blank"
              rel="noopener noreferer"
            >
              <Github />
            </a>
            <a
              href="https://instagram.com/albertadam_"
              className={styles.social}
              target="_blank"
              rel="noopener noreferer"
            >
              <Instagram />
            </a>

            <a
              href="https://steamcommunity.com/id/_albert"
              className={styles.social}
              target="_blank"
              rel="noopener noreferer"
            >
              <Steam />
            </a>

            <a className={styles.social} onClick={copyDiscord}>
              <Discord />
            </a>
          </p>
        </div>
      </div>
      <CSSTransition in={visibleNot} timeout={230} classNames="fade-transition">
        <div
          className={styles.Notification}
          onClick={() => setVisibleNot(false)}
        >
          Copied discord tag!
        </div>
      </CSSTransition>
    </>
  );
}
