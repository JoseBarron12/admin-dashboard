import styles from "../style/Dashboard.module.css"
import {useState } from "react"

import {NavBar } from "./Navbar"
import { Header } from "./Header"

export function Dashboard() {
    
    const [showSideBar, setShowSideBar] = useState(true)
    
    return (
        <div className={showSideBar ? styles.open : styles.close}>
            
            { showSideBar && <NavBar setShowSideBar={setShowSideBar}/>}
            
            <div>
                <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
                <div>
                    <main>
                    </main>
                </div>
            </div>
        </div>
    )
}