import { ITaskType } from "./interface";
class TaskType implements ITaskType {
    public type: string;
    constructor(){}
    public createTaskType = ()=> {
        return Promise.resolve({
            type: 'xyz'
        })
    }

    public updateTaskType = ()=> {
        return Promise.resolve({
            type: 'xyz'
        });
    }

    public deleteTaskType = ()=> {
        return Promise.resolve(true);
    }

    public listTaskType = ()=> {
        return Promise.resolve(['xyz']);
    }
}

export default TaskType;