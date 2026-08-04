import { Dashboard } from "./components/Dashboard";
import { Work } from "./components/Work";
import { Notification } from "./components/Notification";
import { Setting } from "./components/Setting";

const routes = [
    {
        path: "/",
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