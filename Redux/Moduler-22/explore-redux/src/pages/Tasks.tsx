import { AddTaskModule } from "@/components/module/tasks/AddTaskModule";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook"

const Tasks = () => {

    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilter);
    console.log(tasks);
    console.log(filter);


    return (
        <div>
            <div className="flex justify-between items-center">
                <h1>Tasks</h1>
                <AddTaskModule></AddTaskModule>
            </div>
            <div>
                {tasks.map(task => <TaskCard key={task.id} task={task} />)}
            </div>
        </div>
    )
}

export default Tasks
