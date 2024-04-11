export class Todo {
    constructor (
        public id: Number | undefined,
        public title: String | undefined,
        public details: String | undefined,
        public status: String | undefined,
        public due_date: Date | undefined, 
    ) {}
}
