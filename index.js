let tbody = document.querySelector("tbody");
let p = document.createElement("p");
let select = document.querySelector("select")
let alertDiv = document.querySelector(".alert");
let table = document.querySelector("tbody");
let count = 0;






function submitForm(){
  if(document.querySelector("#fname").value && document.querySelector("#sname").value && document.querySelector("#phone").value && document.querySelector("select").value!= "Default" ){
    let edit = document.createElement("i");
    edit.className += "fa fa-pencil-square-o edit";
    let deleted = document.createElement("i");
    deleted.className += "fa fa-trash mx-2 delete";
    let bgroup= document.querySelector("#bgroup").value;
    let tr =  document.createElement("tr");
    tbody.appendChild(tr);
    let fname = document.querySelector("#fname").value;
    let sname = document.querySelector("#sname").value;
    let fullName = (fname.concat(" " + sname)).toUpperCase();
    let phone = document.querySelector("#phone").value;
    let td =  document.createElement("td");
    count = count + 1;
    let array = [count,fullName,bgroup,phone];
          for(let i =0; i<array.length ; i++){
            let td = document.createElement("td");
            td.innerHTML = array[i];
            tr.appendChild(td);
          }  
          td.appendChild(edit);
          td.appendChild(deleted);
          tr.appendChild(td);
          document.querySelector("#fname").value = "";
          document.querySelector("#sname").value = "";
          document.querySelector("#phone").value = "";
          select.value = "Default"
  }  
}


// delete button

window.addEventListener("click" , ()=>{
  let i = document.querySelectorAll("tbody i");
  i.forEach((e)=>{
    if(e.classList.contains("delete")){
      e.addEventListener("click" ,(e)=>{
        alert("Warning! Pressing OK to Delete")
        let parent = e.currentTarget.parentNode.parentNode;
        let indexNum = parent.rowIndex;
        parent.style.display = "none";
        
       })
    }
  })
})


// edit button

window.addEventListener("click" , ()=>{
  let i = document.querySelectorAll("i");
  i.forEach((e)=>{
    if(e.classList.contains("edit")){
      p.style.display = "block"
      if(select.value !== "Default"){
        p.style.display = "none"
      }
      e.addEventListener("click" , (e)=>{
        let parentEdit = e.currentTarget.parentElement.parentElement;
        let editChild = parentEdit.childNodes;
          let fname = editChild[1].innerHTML.split(" ");
          document.querySelector("#fname").value = (fname[0]).toLowerCase();
          document.querySelector("#sname").value = (fname[1]).toLowerCase();
          document.querySelector("#phone").value = (editChild[3].innerHTML).toLowerCase();
          document.querySelector("#bgroup").value = "Default";
          let parent = e.currentTarget.parentElement.parentElement;
          parent.style.display = "none";
          count = 0;

      })
    }
  })
})


// blood group showing

let phone = document.querySelector("#phone");
phone.addEventListener("keypress" , (e)=>{
       let phoneNum = e.currentTarget.value;
       if(phoneNum.length === 9){
        let submitBtn = document.querySelector(".submitBtn");
        let submitDiv = document.querySelector(".submit-div");
        p.style.fontWeight = "1000"
        p.style.color = "red";
        p.innerHTML = "Select Blood Group";
        submitDiv.insertBefore(p,submitBtn)
       }
})



// bloodgroupshow disabling

select.addEventListener("change" , (e)=>{
  let currentValue = e.currentTarget.value;
  if(currentValue !== "Default"){
    p.style.display= "none";
  }
})
  





 
