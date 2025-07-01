import { cn } from '@/lib/utils';
import type { ITask } from '@/types';
import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';

interface IProps {
    task: ITask;
}

const TaskCard = ({ task }: IProps) => {
    return (
        <div className="bg-secondary/10 rounded-md p-5 max-w-md">
            <h1 className={cn
                ("text-lg font-semibold mb-3", {
                    "text-green-500": task.priority == "Low",
                    "text-red-500": task.priority == "High",
                    "text-yellow-500": task.priority == "Medium",
                })}>
                {task.title}
            </h1>
            <p className="mb-3">
                {task.description}
            </p>
            <p className="text-sm">Assigned to - Idba Islam</p>
            <div className="flex justify-between mt-3">
                <p>2023-08-28</p>
                <div className="flex gap-3">
                    <button title="Delete">
                        <TrashIcon className="h-5 w-5 text-red-500" />
                    </button>
                    <button title="In progress">
                        <ArrowRightIcon className="h-5 w-5 text-primary" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
