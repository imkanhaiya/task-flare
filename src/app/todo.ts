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
        public id: Number | null,
        public title: String | null,
        public details: String | null,
        public status: TodoStatus | null,
        public due_date: Date | null, 
    ) {}
}
