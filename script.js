document.getElementById("calcStats").disabled = true;
const statsList = document.createElement('ul');
statsTitle.after(statsList);
const company = new Company();
addPerson.onclick = () => {
    let message = '';
    const empl = new Employee(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value, salary.value.trim());
    if (!Object.values(empl).some((item) => item === '')){
        if (company.addEmployee(empl)) {
            addEmplToPage(empl);
        }else{
            (message = `Employee with ID: ${empl.id} already exist in the list`);
        }
    }else{
        message = 'One or more input field(s) is (are) empty!'
    }
    if (message) {
        alert(message);
    }
}

calcStats.onclick = () => {
    statsList.innerHTML = '';
    const stats = [];
    stats.push( `Employee's minimum age has: ${company.getMinMaxStatistic('min', 'Age').toString()}`);
    stats.push(`Employee's maximum age has: ${company.getMinMaxStatistic('max', 'Age').toString()}`);
    stats.push(`Average age: ${((company.employees.reduce((acc, p) => acc + p.Age, 0)) / company.size).toFixed(2)} year(s).`);
    stats.push(`Employee's minimum salary has: ${company.getMinMaxStatistic('min', 'salary', this._employees).toString()}`);
    stats.push(`Employee's minimum salary has: ${company.getMinMaxStatistic('max', 'salary', this._employees).toString()}`);
    stats.push(`Average salary: ${((company.employees.reduce((acc, p) => acc + p.salary, 0)) / company.size).toFixed(2)} coin(s).`);
    stats.forEach (p => statsList.appendChild(createInfoElement(p, 'li')));
   }

function addEmplToPage(person) {
     const li =  createInfoElement(person.toString(), 'li');
     if(company.size === 1){
         document.getElementById("calcStats").disabled = false;
     }
     const btnDel = createButtonDel(() => {
        statsList.innerHTML = '';
        company.removeEmployee(person.id)
        if (company.size === 0) {
          document.getElementById("calcStats").disabled = true;
        }
    });
    li.append(btnDel);
    personsList.appendChild(li);
    if(statsList.innerHTML){
        statsList.innerHTML = '';
    }
}


