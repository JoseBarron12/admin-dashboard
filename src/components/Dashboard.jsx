import styles from "../style/Dashboard.module.css"
import {useState } from "react"

import {NavBar } from "./Navbar"
import { Header } from "./Header"

export function Dashboard() {
    
    const [showSideBar, setShowSideBar] = useState(true)
    
    return (
        <div className={showSideBar ? styles.open : styles.close}>
            
            <NavBar setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
            
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