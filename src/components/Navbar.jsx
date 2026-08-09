import {LayoutDashboard, Calendar, Toolbox, Settings, LogOut, ChevronRight, Timer} from "lucide-react"
import logoPNG from "../assets/logo.png"
import styles from "../style/Navbar.module.css"
import { Link } from "react-router"
export function NavBar({setShowSideBar, showSideBar}) {
    
    return (
        <nav className={showSideBar ? styles.open : styles.close} data-testid="navbar">
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
                    
            <Link to= "/" className={styles.navSetting}>
                <button>
                    <LogOut/> <p>Logout</p>
                </button>
            </Link>

            <button data-testid="close-nav-btn" onClick={() => {
                setShowSideBar(false);
            }} className={styles.closeNavBtn}>
                <ChevronRight/>
            </button>

        </nav>
    )
    
}