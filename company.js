

class Company{
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }
     addEmployee(employee){
            const index = this._employees.findIndex(e => e.id === employee.id);
            if (index<0){
                this._employees.push(employee);
            }
            return index < 0;
        }

        removeEmployee(id){
            const index = this._employees.findIndex(e => e.id === id);
            if (index >= 0){
                this._employees.splice(index,1);
            }
            return index >= 0;
        }

        get size(){
        return this._employees.length;
        }

        getMinMaxStatistic(miniMax, field) {
        let res = this._employees[0];
        miniMax = miniMax==='min' ? -1 : 1;
        this._employees.forEach(e => {
            (miniMax*(e[field] - res[field]) > 0 ? res = e : e);
        });
        return res;

    }
}