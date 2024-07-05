export enum TodoStatus {
    SELECT = "Select",
    ACTIVE = "Active",
    IN_PROGRESS = 'In Progress',
    COMPLETED = 'Completed',
    PENDING = 'Pending',
    INACTIVE = 'Inactive',
}

export class Todo {
    constructor (
        public id: string | null,
        public title: string | null,
        public details: string | null,
        public status: TodoStatus | null,
        public due_date: Date | null, 
    ) {}
}
