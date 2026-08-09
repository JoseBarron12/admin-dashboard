import { Dashboard } from "./components/Dashboard";
import { Work } from "./components/Work";
import { Notification } from "./components/Notification";
import { Setting } from "./components/Setting";
import { Login } from "./components/Login";

const routes = [
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "home",
        element: <Dashboard/>,
    },
    {
        path: "work",
        element: <Work/>,
    },
    {
        path: "notifications",
        element: <Notification/>,
    },
{
        path: "settings",
        element: <Setting/>,
    }
]

export default routes;