import Head from "next/head";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Coutndown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <div className={styles.container}>
        <ExperienceBar></ExperienceBar>

        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Coutndown />
          </div>
          <div></div>
        </section>
      </div>
    </>
  );
}
