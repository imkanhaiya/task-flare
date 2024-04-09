export class Todo {
    constructor (
        public id: Number,
        public title: String,
        public details: String,
        public status: String,
        public due_date: Date, 
    ) {}
}
