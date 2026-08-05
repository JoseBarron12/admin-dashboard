import { Menu, Search, Plus, Bell} from "lucide-react"
import styles from "../style/Header.module.css"
import defaultPfpPNG from "../assets/react.svg"

export function Header({showSideBar, setShowSideBar}) {
    return (
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
    )
}