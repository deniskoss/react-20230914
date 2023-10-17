import { createPortal } from "react-dom";
import styles from './styles.module.css'

export const Modal = ({ children, onClose, withOverlay = true }) => {
    return createPortal(
        <>
            {withOverlay && <div onClick={onClose} className={styles.overlay}></div>}
            <div className={styles.modal}>
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </>
        ,
        document.getElementById('modal-container')
    );
};