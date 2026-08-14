import styles from "../style/Dashboard.module.css"
import {useState } from "react"

import {NavBar } from "./Navbar"
import { Header } from "./Header"
import { JobWindow } from "./JobWindow"

export function Dashboard() {
    
    const [showSideBar, setShowSideBar] = useState(true)
    const [showJobWindow, setShowJobWindow] = useState(false);

    return (
        <div className={showSideBar ? styles.open : styles.close}>
            
            <NavBar setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
            
            <div>
                <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar}
                        showJobWindow={showJobWindow} setShowJobWindow={setShowJobWindow}/>
                <div>
                    <main>
                    </main>
                </div>
            </div>

            {showJobWindow && <JobWindow setShowJobWindow={setShowJobWindow}/>}

        </div>
    )
}