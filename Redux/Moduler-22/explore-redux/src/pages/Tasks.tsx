import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook"

const Tasks = () => {

    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilter);
    console.log(tasks);
    console.log(filter);


    return (
        <div>
            <h1>Tasks</h1>
        </div>
    )
}

export default Tasks
