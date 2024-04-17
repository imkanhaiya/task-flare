export class Todo {
    constructor (
        public id: Number | null,
        public title: String | null,
        public details: String | null,
        public status: String | null,
        public due_date: Date | null, 
    ) {}
}
