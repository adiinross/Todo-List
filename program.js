function addtodo(){
    let table = document.getElementById("table"),
    newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    todo = document.getElementById("todo").value;
    cell1.innerHTML=todo;
}