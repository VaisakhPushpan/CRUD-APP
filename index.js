let data =[];  //store all data in this array
const table = document.querySelector("tbody");


function submitForm(e){
    e.preventDefault();
    let formElement = e.target;
    let formData = new FormData(formElement);
    data.push({
      fname : formData.get("fname").toUpperCase(),
      lname : formData.get("lname").toUpperCase(),
      bgroup : formData.get("bgroup"),
      phone : formData.get("phone")
    })
    formElement.reset()
    populateTable()
}

function populateTable(){
  table.innerHTML = ""
  data.forEach((item,index)=>{
    table.innerHTML += `
    <tr>
    <td>${index+1}</td>
    <td>${item.fname + " " + item.lname}</td>
    <td>${item.bgroup}</td>
    <td>${item.phone}</td>
    <td><i class="fa fa-pencil-square-o mx-2" onclick="edit(${index})" aria-hidden="true"></i><i class="fa fa-trash-o" onclick="delte(${index})" aria-hidden="true"></i></td>
    `
  })
    alert("Your Details Added Sucessfully")
  
}

function delte(i){
   data.splice(i,1);
   populateTable();
}
function edit(i){
  document.querySelector('[name="fname"]').value = (data[i].fname).toLowerCase();
  document.querySelector('[name="lname"]').value = (data[i].lname).toLowerCase();
  document.querySelector('[name="phone"]').value = data[i].phone;
  document.querySelector('[name="bgroup"]').value = data[i].bgroup;
  data.splice(i,1)
}
  





 
