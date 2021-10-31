import { FC } from "react";
import Head from "next/head";
import { Navbar, Footer } from "components";
import styles from "./Layout.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <link as="style" rel="preload" href="/styles/globals.scss" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
