import { ITask } from "./interface";
class Task implements ITask {
    name: string;
    taskType: string;
    taskDueDate: Date;
    createdBy: string;
    modifiedBy: string;
    constructor() { }

    public createTask = () => {
        return Promise.resolve({
            type: 'xyz'
        })
    }

    public updateTask = () => {
        return Promise.resolve({
            type: 'xyz'
        });
    }

    public deleteTask = () => {
        return Promise.resolve(true);
    }

    public readTask = () => {
        return Promise.resolve(['xyz']);
    }

    public listTask = () => {
        return Promise.resolve(['xyz']);
    }
}

export default Task;
