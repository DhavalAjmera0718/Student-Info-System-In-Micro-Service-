export class AdminModel {


    constructor() {
        this.enrollmentNo = '';
        this.password = '';
        this.name = '';
        this.name = '';
        this.gender = '';
        this.dob = new Date;
        this.branch = '';
        this.contact = '';
        this.city = '';
        this.address = '';
        this.pinCode = 0;
        this.securityKey = '';
        this.role = '';
    }

    enrollmentNo: String;

    password: String;

    name: String;

    gender: String;

    dob: Date;

    branch: String;

    contact: String;

    address: String;

    city: String;

    pinCode: number;

    securityKey: String;

    role: String;
}
