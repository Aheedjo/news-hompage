import Link from "next/link";
import styles from "../styles/Submenu.module.scss";
import Image from "next/image";
import Close from "../public/images/icon-menu-close.svg";
import { useGlobalContext } from "../context";

const Submenu = () => {
    const { showSidebar, closeSidebar } = useGlobalContext();

    return (
        <aside
            className={`${
                showSidebar
                    ? styles.submenuContainer + " " + styles.active
                    : styles.submenuContainer
            }`}
        >
            <div className={styles.submenu}>
                <Image
                    src={Close}
                    alt="close"
                    className={styles.closeImg}
                    onClick={closeSidebar}
                />
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/">New</Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/">Popular</Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/">Trending</Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/">Categories</Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Submenu;
