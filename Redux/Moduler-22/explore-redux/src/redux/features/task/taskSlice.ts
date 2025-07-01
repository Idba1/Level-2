import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low";
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
    ],
    filter: "all"
}


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
})

export const selectTasks = (state: RootState) => {
    return state.tasks.tasks;
}
export const selectFilter = (state: RootState) => {
    return state.tasks.filter;
}

export default taskSlice.reducer;