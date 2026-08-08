import { Menu, Search, Plus, Bell} from "lucide-react"
import styles from "../style/Header.module.css"
import defaultPfpPNG from "../assets/react.svg"
import { useEffect, useState} from "react"


export function Header({showSideBar, setShowSideBar}) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        
        const createBuffer = async () => {
            const yuh = await new Promise(resolve => setTimeout(resolve, 1500));
            console.log("PASSE")
        }
        
        createBuffer()// artificially create 1s delay before changing screen width
        
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth);
        });

        setScreenWidth(window.innerWidth);

        return () => {
            
            window.removeEventListener("resize", () => {
            setScreenWidth(window.innerWidth);
            });
        }
    },[screenWidth]);
    
    
    return (
        <header className={showSideBar ? styles.headerSmall : styles.header}>        
            { !showSideBar && <button className={styles.navBtn} onClick={() => {
                setShowSideBar(true);
            }} data-testid="open-nav-btn">
                <Menu className={styles.headerBigIcon}/>
            </button>}
                    
            <div className={styles.headerLeft}>
                <div role="search">
                    <label htmlFor="search-query" className={styles.headerSearch}>
                        <Search className={styles.headerIcon}></Search>
                        <input type="search" name="search-query" id="search-query" 
                        placeholder = {screenWidth <= 700 ? "" : screenWidth <= 1000 ? "Search" : "Search jobs, customers, etc..."} />
                    </label>
                </div>
                
                <div className={styles.headerBtns}>
                    <button className={styles.headerJobBtn}>
                        <Plus className={styles.headerIcon}></Plus>
                        <p>Create Job</p>
                    </button>
                    
                    <button className={styles.headerNotiBtn}>
                        <Bell className={screenWidth <= 700 ? styles.headerIcon : styles.headerBigIcon}></Bell>
                    </button>
                            
                    <button className={styles.headerPfp}>
                        <img src={defaultPfpPNG} alt="" />
                    </button>
                </div>
            </div>
    </header>
    )
}