class Employee {
    constructor(empObj) {
        this.id = empObj.id;
        this.firstName = empObj.firstName;
        this.lastName = empObj.lastName;
        this.bithday = new Date(empObj.birthday.split('/').reverse().join('-'));
        this.salary = empObj.salary;
        this.position = empObj.position || null;
        this.department =  empObj.department || null;

        Employee.EMPLOYEES.push(this);
    }

    get age() {
        let nowDate = new Date();

        let years = nowDate.getFullYear() - this.bithday.getFullYear();
        if(nowDate.getMonth() < this.bithday.getMonth()) {
            years --;
        } else if(nowDate.getMonth() === this.bithday.getMonth()) {
            if(nowDate.getDate() < this.bithday.getDate()) {
                years--;
            }
        }

        return years;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    static EMPLOYEES = [];

    quit() {
        Employee.EMPLOYEES.splice(Employee.EMPLOYEES.indexOf(this), 1);
    }
    retire() {
        this.quit();
        console.log('It was such a pleasure to work with you!');
    }
    getFired() {
        this.quit();
        console.log('Not a big deal!');
    }
    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }
    changePosition(newPosition) {
        this.position = newPosition;
    }
    changeSalary(newSalary) {
        this.salary = newSalary;
    }
    getPromoted(benefits) {
        if(benefits.salary){
            this.changeSalary(benefits.salary);
        }

        if(benefits.position) {
            this.changePosition(benefits.position);
        }

        if(benefits.department) {
            this.changePosition(benefits.department);
        }

        console.log('Yoohooo!');
    }
    getDemoted(punishment) {
        if(punishment.salary){
            this.changeSalary(punishment.salary);
        }

        if(punishment.position) {
            this.changePosition(punishment.position);
        }

        if(punishment.department) {
            this.changePosition(punishment.department);
        }

        console.log('Damn!');
    }
}

class Manager extends Employee {
    constructor(empObj) {
        super(empObj);
        this.changePosition('manager');
    }

    get managedEmployees() {
        return Employee.EMPLOYEES.filter(emp => 
            emp.department === this.department && emp.position != 'manager'
        );
    }
}

class BlueCollarWorker extends Employee {}

class HRManager extends Manager {
    constructor(empObj) {
        super(empObj);
        this.changeDepartment('hr');
    }
}

const promoteEmp = (manager) => ({
    promoteEmp(employee, benefits) {
        let managedEmp = manager.managedEmployees.find(emp => emp === employee);
        if (managedEmp) {
            managedEmp.getPromoted(benefits);
        } else {
            console.log('Error');
        }
    }
});
  
const demoteEmp = (manager) => ({
    demoteEmp(employee, punishment) {
        let managedEmp = manager.managedEmployees.find(emp => emp === employee);
        if (managedEmp) {
            managedEmployee.getDemoted(punishment);
        } else {
            console.log('Error');
        }
    }
})
  
function ManagerPro(manager) {
    Object.assign(manager,
        promoteEmp(manager),
        demoteEmp(manager)
    );
}

class SalesManager extends Manager {
    constructor(empObj) {
        super(empObj);
        this.changeDepartment('sales');
    }
}

const salesManager = new SalesManager({
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    birthday: '10/04/1994',
    salary: 5000
});
const hrManager = new HRManager({
    id: 2,
    firstName: 'Bob',
    lastName: 'Doe',
    birthday: '28/08/1990',
    salary: 5000
});
const blueCollarWorkerOne = new BlueCollarWorker({
    id: 3,
    firstName: 'Mary',
    lastName: 'Doe',
    birthday: '12/02/1995',
    salary: 5000,
    position: 'office worker',
    department: 'sales'
});
const blueCollarWorkerTwo = new BlueCollarWorker({
    id: 4,
    firstName: 'Jane',
    lastName: 'Doe',
    birthday: '16/12/1987',
    salary: 5000,
    position: 'office worker',
    department: 'hr'
});

// test task 3
// ManagerPro(hrManager);
// hrManager.promoteEmp(blueCollarWorkerTwo, { salary: 10000 });
// console.log(blueCollarWorkerTwo);
