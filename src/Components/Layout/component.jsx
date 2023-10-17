import { Header } from "../Header/component.jsx";
import { Footer } from "../Footer/component.jsx";
import classNames from "classnames";
import styles from "./styles.module.css";
import React from "react";

export const Layout = ({children}) => {
    return (
        <div>
            <div  className={classNames(styles.root)}>
                <Header className={styles.header} />
                <main>{children}</main>
                <Footer className={styles.footer} />
            </div>
            <div id="modal-container" className={styles.modalContainer}></div>
        </div>
    )
}