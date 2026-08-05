import {LayoutDashboard, Calendar, Toolbox, Settings, LogOut, ChevronRight} from "lucide-react"
import logoPNG from "../assets/logo.png"
import styles from "../style/Navbar.module.css"


export function NavBar({setShowSideBar}) {
    
    return (
        <nav data-testid="navbar">
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

        </nav>
    )
    
}