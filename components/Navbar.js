import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.svg";
import Hamburger from "../public/images/icon-menu.svg";
import styles from "../styles/Nav.module.scss";
import { useGlobalContext } from "../context";

const Navbar = () => {
    const { openSidebar } = useGlobalContext();

    return (
        <header>
            <div className={styles.nav}>
                <Image src={Logo} alt="logo" className={styles.logo} />
                <nav>
                    <ul className={styles.navLinks}>
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
                    <Image
                        src={Hamburger}
                        alt="hamburger"
                        className={styles.hamburger}
                        onClick={openSidebar}
                    />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
