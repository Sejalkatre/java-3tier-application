const API="http://localhost:9000/api/employees";

function loadEmployees(){

fetch(API)
.then(res=>res.json())
.then(data=>{

let rows="";

data.forEach(emp=>{

rows += `
<tr>
<td>${emp.id}</td>
<td>${emp.name}</td>
<td>${emp.email}</td>
<td>${emp.department}</td>

<td>
<button onclick="deleteEmployee(${emp.id})">
Delete
</button>
</td>
</tr>
`;

});

document.getElementById("employeeTable").innerHTML=rows;

});

}

function addEmployee(){

const employee={

name:document.getElementById("name").value,

email:document.getElementById("email").value,

department:document.getElementById("department").value

};

fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(employee)
})
.then(()=>{

loadEmployees();

});

}

function deleteEmployee(id){

fetch(API+"/"+id,{
method:"DELETE"
})
.then(()=>{

loadEmployees();

});

}

loadEmployees();
