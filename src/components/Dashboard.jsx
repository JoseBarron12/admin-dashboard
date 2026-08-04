import { Link } from "react-router"


export function Dashboard() {
    return (
        <>
            <Link to="/">Dashboard</Link>
            <Link to="work">Work</Link>
            <Link to="notifications">Notifications</Link>
            <Link to="settings">Settings</Link>
        </>
    )
}