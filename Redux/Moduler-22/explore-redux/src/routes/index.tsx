import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                // path: "users",
                index: true,
                element: <Tasks></Tasks>
            },
            {
                path: "users",
                element: <User></User>
            },
            {
                path: "tasks",
                element: <Tasks></Tasks>
            }
        ]
    },
]);

export default router;
