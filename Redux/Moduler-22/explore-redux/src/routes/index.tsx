import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/user";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                // path: "users",
                index: true,
                element: <User></User>
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
