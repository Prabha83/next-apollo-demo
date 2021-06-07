import React, { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";
import Link from "next/link";

type Props = {
    children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
    return (
        <div>
            <nav className="navbar is-transparent no-shadow" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img
                            src="https://bulma.io/images/bulma-logo.png"
                            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
                            width="112"
                            height="28"
                        />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link href="/">
                            <a className="navbar-item">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="navbar-item">About</a>
                        </Link>
                        <Link href="/contacts">
                            <a className="navbar-item">Contacts</a>
                        </Link>
                    </div>
                </div>
            </nav>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Layout;
