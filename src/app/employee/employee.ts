export class Employee {
    private name: string;
    private phNo: number;
    private email: string;
    private wissenId: number;

    constructor(name, no, email, id) {
        this.name = name;
        this.phNo = no;
        this.email = email;
        this.wissenId = id;
    }
    get getName(): string {
        return this.name;
    }
    get getPhno(): number {
        return this.phNo;
    }
    get getEmail(): string {
        return this.email;
    }
    get getWissenId(): number {
        return this.wissenId;
    }
}
