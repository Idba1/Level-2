import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    tasks: ITask[];
}

const initialState: IinitialState = {
    tasks: [
        {
            id: "IDBA, youaremybabyyyyy!",
            title: "Initialize frontend",
            description: "Create Home Page And Routing",
            dueDate: "2035-11",
            isCompleted: false,
            priority: "High"
        },
        {
            id: "IDBA, youaremyjaaaan!",
            title: "Create Github Repo",
            description: "Create Home Page And Routing",
            dueDate: "2035-11",
            isCompleted: false,
            priority: "High"
        },
    ]
}


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
})

export default taskSlice.reducer;