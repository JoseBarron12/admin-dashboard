import { Link } from "react-router"
import { Menu, Search, Plus,Bell, LayoutDashboard, Calendar, Toolbox, Settings, LogOut, ChevronRight} from "lucide-react"
import defaultPfpPNG from "../assets/react.svg"
import logoPNG from "../assets/logo.png"
import styles from "../style/Dashboard.module.css"
import {useState } from "react"

export function Dashboard() {
    
    const [showSideBar, setShowSideBar] = useState(true)
    
    return (
        <div className={styles.page}>
            <div >
                <header className={styles.header}>
                    
                    { !showSideBar && <button className={styles.navBtn} onClick={() => {
                        setShowSideBar(true);
                    }} data-testid="open-nav-btn">
                        <Menu className={styles.headerIcon}/>
                    </button>}
                    
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
                    <main>
                    </main>
                </div>
            </div>
            {showSideBar && <nav data-testid="navbar">
                <div className={styles.logoContainer}>
                    <img className={styles.logoImg} src={logoPNG} alt="" />
                </div>
                <div className={styles.navBtns}>
                    <button>
                        <LayoutDashboard /> <p>Dashboard</p>
                    </button>
                    <button>
                        <Calendar/> <p>Calendar</p>
                        </button>
                    <button>
                        <Toolbox/> <p>Work</p>
                    </button>
                    <button>
                        <Settings/> <p>Settings</p>
                    </button>
                </div>
                <div className={styles.navSetting}>
                    <button>
                        <LogOut/> <p>Logout</p>
                    </button>
                </div>

                <button data-testid="close-nav-btn" onClick={() => {
                    setShowSideBar(false);
                }} className={styles.closeNavBtn}>
                    <ChevronRight/>
                </button>

            </nav>}
        </div>
    )
}