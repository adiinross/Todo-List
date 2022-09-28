function addtodo(){
    if(!checkEmptyInput()){
    let table = document.getElementById("table"),
    newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    todo = document.getElementById("todo").value;
    cell1.innerHTML=todo;
}
}
function checkEmptyInput()
{
    let isEmpty = false,
    todo = document.getElementById("todo").value;

    if(todo === ""){
        alert("You have nothing to do?");
        isEmpty = true;
}
return isEmpty;
}
