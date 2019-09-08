

export interface ITask {
    name: string;
    taskType: string;
    taskDueDate: Date;
    createdBy: string;
    modifiedBy: string;
    createTask: () => {};
    updateTask: () => {};
    readTask: () => {};
    listTask: () => {};
    deleteTask: () => Promise<boolean>;

}

export interface IUser {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    createdDate: Date;
    createUser: () => {};
    updateUser: () => {};
    listUser: () => {};
    deleteUser: () => Promise<boolean>;

}

export interface ITaskType {
    type: string;
    createTaskType: () => {};
    deleteTaskType: () => Promise<boolean>;
    updateTaskType: () => {};
    listTaskType: () => Promise<Array<string>>;
}

