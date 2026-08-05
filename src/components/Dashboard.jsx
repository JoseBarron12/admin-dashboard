import { Link } from "react-router"
import { Menu, Search, Plus,Bell} from "lucide-react"
import defaultPfpPNG from "../assets/react.svg"
import styles from "../style/Dashboard.module.css"
export function Dashboard() {
    return (
        <>
            <header className={styles.header}>
                <div>
                    <Menu className={styles.headerIcon}/>
                </div>
                <div className={styles.headerLeft}>
                    <div role="search">
                        <label htmlFor="search-query" className={styles.headerSearch}>
                            <Search className={styles.headerIcon}></Search>
                            <input type="search" name="search-query" id="search-query" placeholder="Search jobs, customers, etc..." />
                        </label>
                    </div>
                    <div className={styles.headerBtns}>
                        <button className={styles.headerJobBtn}>
                            <Plus className={styles.headerIcon}></Plus>
                            <p>Create Job</p>
                        </button>
                        <button className={styles.headerNotiBtn}>
                            <Bell className={styles.headerIcon}></Bell>
                        </button>
                        <button className={styles.headerPfp}>
                            <img src={defaultPfpPNG} alt="" />
                        </button>
                    </div>
                </div>
            </header>
            <div>
                <nav>

                </nav>
                <main>
                </main>
            </div>
        </>
    )
}