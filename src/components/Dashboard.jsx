import { Link } from "react-router"
import { Menu, Search, Plus,Bell, LayoutDashboard, Calendar, Toolbox, Settings, LogOut, ChevronRight} from "lucide-react"
import defaultPfpPNG from "../assets/react.svg"
import styles from "../style/Dashboard.module.css"
import {useState } from "react"

import {NavBar } from "./Navbar"
export function Dashboard() {
    
    const [showSideBar, setShowSideBar] = useState(true)
    
    return (
        <div className={styles.page}>
            
            { showSideBar && <NavBar setShowSideBar={setShowSideBar}/>}
            <div>
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
        </div>
    )
}